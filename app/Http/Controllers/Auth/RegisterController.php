<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\User;
use Spatie\Permission\Models\Role;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('auth/Register');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'max:255', 'string'],
            'email' => ['required', 'max:255', 'email', 'unique:users'],
            'password' => ['required', 'max:255', 'string', 'confirmed']
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $role = Role::findByName('user');
        $user->assignRole($role);

        return redirect()->route('register')->with('success', 'User created successfully!');
    }
}
