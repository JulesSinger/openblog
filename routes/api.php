<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\admin\PostController as AdminPostController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Authentication routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);

// Category routes
Route::get('/categories', [CategoryController::class, 'list']);
Route::get('/categories/{id}', [CategoryController::class, 'index']);
Route::post('/categories/insert', [CategoryController::class, 'insert']);
Route::patch('/categories/update/{id}', [CategoryController::class, 'update']);
Route::delete('/categories/delete/{id}', [CategoryController::class, 'delete']);

// Quote routes
Route::get('/quotes', [QuoteController::class, 'index']);
Route::post('/quotes/insert', [QuoteController::class, 'insert']);
Route::delete('/quotes/{id}', [QuoteController::class, 'delete']);

// Post routes
Route::get('/posts', [PostController::class, 'list']);
Route::get('/posts/{id}', [PostController::class, 'index']);

// Comment routes
Route::post('/comment', [CommentController::class, 'store']);
Route::get('/post/{id}/comments', [CommentController::class, 'index']);

// Auth routes
Route::middleware(['auth:sanctum'])->group(function () {
  Route::get('/user', function (Request $request) {
      return $request->user();
  });
});