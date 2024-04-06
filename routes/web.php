<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SimonPioli\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', function(){
    return Inertia::render('About');
})->name('about');
Route::get('/services', function(){
    return Inertia::render('Services');
})->name('services');
Route::get('/contact', function(){
    return Inertia::render('Contact');
})->name('contact');

