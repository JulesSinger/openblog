<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;

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

Route::get('categories', [CategoryController::class, 'index']);

Route::get('quotes', [QuoteController::class, 'index']);

// Post routes
Route::get('posts', [PostController::class, 'list']);
Route::get('posts/{id}', [PostController::class, 'index']);
// Comment routes
Route::post('comment', [CommentController::class, 'store']);
Route::get('post/{id}/comments', [CommentController::class, 'index']);
