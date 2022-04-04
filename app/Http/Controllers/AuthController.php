<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

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

        $user = User::where('email', $request->email)->first();

        if (Hash::check($request->password, $user->password)) {
            return response()->json([
                'user' => $user,
                'token' => $user->createToken(time())->plainTextToken
            ]);
        }

        return response()->json([
            'test' => 'test'
        ]);
    }

      /**
     * Register a new user
     *
     * @param Request $request
     * @return Response
     */
    public function register(Request $request)
    {
        $payload = $request->only(['email', 'pseudo', 'password', 'password_confirmation']);
    
        // Store new user
        $user = new User();
        $user->email = $request->email;
        $user->pseudo = $request->pseudo;
        $user->password = Hash::make($request->password);
        $user->save();

        // Log in the new user
        Auth::login($user);

        // Response
        return response()->json([
            'user' => $user,
            'token' => $user->createToken(time())->plainTextToken
        ]);
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
     * Get informations about the current user
     *
     * @return Response
     */
    public function me()
    {
        /** @var User */
        $user = Auth::user();
        return $user;
    }
}
