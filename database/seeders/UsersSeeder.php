<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Admin',
                'email' => 'admin@dash.com',
                'password' => bcrypt('online123')
            ],
            [
                'name' => 'User',
                'email' => 'user@dash.com',
                'password' => bcrypt('online123')
            ]
        ];

        foreach ($users as $key => $value) {
            $user = User::create($value);
            if ($key == 0) {
                $user->assignRole('admin');
            } else {
                $user->assignRole('user');
            }
        }
    }
}
