<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\User;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('auth/Login');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => ['required', 'max:255', 'email', 'exists:users', 'string'],
            'password' => ['required', 'max:255', 'string', 'min:8'],
        ]);

        if (!auth()->attempt($request->only('email', 'password'))) {
            return back()->withErrors([
                'password' => 'Your password is incorrect.'
            ]);
        }

        $request->session()->regenerate();

        return redirect()->route('dashboard')->with('success', 'Login successful!');
    }

    public function destroy()
    {
        auth()->logout();

        request()->session()->invalidate();

        request()->session()->regenerateToken();

        return redirect()->route('login')->with('success', 'Logout successful!');
    }
}
