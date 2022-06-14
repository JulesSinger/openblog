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

        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (Hash::check($request->password, $user->password)) {
            return response()->json([
                'user' => $user,
                'token' => $user->createToken(time())->plainTextToken
            ]);
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

        return response()->json([
            'user' => $user,
            'token' => $user->createToken(time())->plainTextToken
        ]);
    }
}


