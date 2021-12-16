<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Quote;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // php artisan migrate:refresh --seed
        User::factory(50)->create();
        Category::factory(50)->create();
        Post::factory(50)->create();
        Comment::factory(20)->create();
        Quote::factory(50)->create();
    }
}
