<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class RoleController extends Controller
{
    public function getRole(): JsonResponse
    {
        return response()->json([
            'is_admin' => auth()->user()->is_admin
        ]);
    }
}
