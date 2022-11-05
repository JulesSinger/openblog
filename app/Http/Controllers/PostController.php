<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Resources\PostResource;
use Carbon\Carbon;

class PostController extends Controller
{
     /**
     * Display a specific post
     *
     * @return array
     */
    public function index($id)
    {
        return PostResource::collection(Post::where('id', $id)->get());
    }

    /**
     * Display a listing of the posts
     *
     * @return array
     */
    public function list()
    {
        return PostResource::collection(Post::paginate(10));
    }

    public function insert(Request $request)
    {
        
        $request->validate([
            'title' => 'required',
            'readTime' => 'required',
            'author' => 'required',
            'content' => 'required',
            'image' => 'required',
            'summary' => 'required',
            'category' => 'required'
        ]);

        $payload = $request->only(['title', 'readTime', 'author', 'image', 'summary', 'content', 'category']);
        $categoryId = $payload['category']['id'];
        
        $post = new Post();
        $post->title = $payload['title'];
        $post->read_time = $payload['readTime'];
        $post->author = $payload['author'];
        $post->image = $payload['image'];
        $post->summary = $payload['summary'];
        $post->content = $payload['content'];
        $post->category_id = $categoryId;
        $post->publication_date = Carbon::now();
        $post->save();

        return response()->json($post->toArray());
    }
}
