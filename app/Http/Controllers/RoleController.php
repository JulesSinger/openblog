<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class RoleController extends Controller
{
    public function getRole(): JsonResponse
    {
        return response()->json([
            'role' => auth()->user()->role
        ]);
    }
}
