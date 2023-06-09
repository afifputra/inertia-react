<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Pages\DashboardController;
use App\Http\Controllers\Pages\SettingController;

use Inertia\Inertia;

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

Route::middleware(['guest'])->group(function () {
    Route::prefix('/login')->group(function () {
        Route::get('/', [LoginController::class, "index"])->name("login");
        Route::post('/', [LoginController::class, "store"])->name("login.store");
    });

    Route::prefix('register')->group(function () {
        Route::get('/', [RegisterController::class, "index"])->name("register");
        Route::post('/', [RegisterController::class, "store"])->name("register.store");
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/', [DashboardController::class, "index"])->name("dashboard");

    Route::prefix('setting')->group(function () {
        Route::get('/', [SettingController::class, "index"])->name("setting");
    });

    Route::post('/logout', [LoginController::class, "destroy"])->name("logout");
});
