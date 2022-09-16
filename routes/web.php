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

Route::get('/', fn() => \Inertia\Inertia::render('WelcomePage', [
    'laravelVersion' => \Illuminate\Foundation\Application::VERSION,
    'phpVersion' => PHP_VERSION,
    'isAuthenticated' => \Illuminate\Support\Facades\Auth::check(),
]));
