<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Response;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Cookie\CookieJar;

class AuthController extends Controller
{
    /**
    * Log in the user
    *
    * @param Request $request
    * @return Response
    */
    public function login(Request $request): JsonResponse
    {

        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        
        $user = User::where('email', $request->email)->first();
        
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $cookie = $this->generateCookie(Auth::id());
            return response()
                ->json([
                    'user' => Auth::getUser(),
                ])->withCookie($cookie);
        }

        return response()->json([
            'error' => 'invalid credentials'
        ], 401);
    }

      /**
     * Register a new user
     *
     * @param Request $request
     * @return Response
     */
    public function register(Request $request)
    {

        $request->validate([
            'email' => 'required',
            'password' => 'required',
            'password_confirmation' => 'required',
            'pseudo' => 'required'
        ]);

        if ($request->password !== $request->password_confirmation) {
            return response()->json([
                'error' => 'password fields don\'t match'
            ], 401);
        }
        
        $user_exist = User::where('email', '=', $request->email)->first();

        if ($user_exist !== null) {
            return response()->json([
                'error' => 'an account with this email already exists'
            ], 409);
        }      

        $user = new User();
        $user->email = $request->email;
        $user->pseudo = $request->pseudo;
        $user->password = Hash::make($request->password);
        $user->save();
        Auth::login($user);

        $cookie = $this->generateCookie(Auth::id());

        return response()
            ->json(Auth::getUser())
            ->withCookie($cookie);
    }


    /**
     * Get informations about the current user
     *
     * @return Response
     */
    public function me()
    {
        /** @var User */
        $user = Auth::user();
        return response()->json($user->toArray());
    }

    /**
     * Log out the user
     *
     * @return Response
     */
    public function logout()
    {
        Auth::logout();
        return response()->json()->withCookie(cookie('auth_token', null, -1));
    }

    /**
     * Generate the cookie token
     *
     * @param integer $user_id
     * @return Cookie|CookieJar
     */
    private function generateCookie(int $user_id)
    {
        return cookie('auth_token', JWT::encode([
            'user_id' => $user_id
        ], env('APP_KEY'), 'HS256'), 0, null, null, env('APP_ENV') === 'production', true);
    }
}


