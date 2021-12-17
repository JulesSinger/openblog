<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
     /**
     * Display a specific post
     *
     * @return Array
     */
    public function index($id)
    {
        return PostResource::collection(Post::where('id', $id)->get());
    }

    /**
     * Display a listing of the posts
     *
     * @return Array
     */
    public function list()
    {
        return PostResource::collection(Post::paginate(10));
    }
}
