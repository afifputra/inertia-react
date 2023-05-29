<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use App\Models\User;

class SettingController extends Controller
{
    public function index()
    {
        // if the roles is not admin, redirect to dashboard
        if (auth()->user()->hasRole('admin')) {
            $roles = Role::all();
            $users = User::all();
            return Inertia::render('setting', [
                'roles' => $roles,
                'users' => $users
            ]);
        } else {
            return redirect()->route('dashboard');
        }
    }
}
