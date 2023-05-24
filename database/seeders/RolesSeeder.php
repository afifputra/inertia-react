<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleAdmin = Role::create(['name' => 'admin']);
        $roleUser = Role::create(['name' => 'user']);

        $permissionRead = Permission::create(['name' => 'read post']);
        $permissionCreate = Permission::create(['name' => 'create post']);
        $permissionUpdate = Permission::create(['name' => 'update post']);
        $permissionDelete = Permission::create(['name' => 'delete post']);

        $permissionAdmin = [
            $permissionRead,
            $permissionCreate,
            $permissionUpdate,
            $permissionDelete
        ];

        $roleAdmin->syncPermissions($permissionAdmin);
        $roleUser->syncPermissions($permissionRead);
    }
}
