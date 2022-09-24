<?php

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('base', ['title' => 'Accueil']);
}); 

Route::get('/quotes', function () {
    return view('base', ['title' => 'Citations']);
}); 

Route::get('/about', function () {
    return view('base', ['title' => 'A Propos']);
}); 

Route::get('/post/{id}', function () {
    return view('base', ['title' => 'Article']);
}); 


Route::get('/register', function () {
    return view('base', ['title' => 'Inscription']);
}); 

Route::get('/account', function () {
    return view('base', ['title' => 'Mon compte']);
}); 

Route::get('/participate', function () {
    return view('base', ['title' => 'Écrire un article']);
}); 

Route::get('/categories', function () {
    return view('base', ['title' => 'Catégories d\'article']);
}); 

Route::get('categories/{id}', function () {
    return view('base', ['title' => 'Catégorie']);
});

Route::get('/admin', function () {
    return view('base', ['title' => 'Panel d\'administration']);
});

Route::get('/admin/quotes', function () {
    return view('base', ['title' => 'Administrations citations']);
});