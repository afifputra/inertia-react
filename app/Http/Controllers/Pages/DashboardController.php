<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $userLoggedIn = auth()->user();
        return Inertia::render('Dashboard')->with('user', $userLoggedIn);
    }
}