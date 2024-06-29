<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinksController;

Route::get('/',[LinksController::class, 'redirect']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('/');
    })->name('dashboard');
});
