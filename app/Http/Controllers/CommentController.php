<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Resources\CommentResource;
use Illuminate\Support\Facades\Auth;
class CommentController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        return CommentResource::collection(Comment::where('post_id', $id)->get());
    }

    /**
     * Store a new comment.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required',
            'subject' => 'required',
            'post_id' => 'required'
        ]);
        
        $content = $request->input('content');
        $post_id = $request->input('post_id');
        $subject = $request->input('subject');
        $user = Auth::user();
        $comment = new Comment();
        $comment->content = $content;
        $comment->user_id = $user->id;
        $comment->post_id = $post_id;
        $comment->subject = $subject;
        $comment->save();

        return response()->json($comment);
    }
}
