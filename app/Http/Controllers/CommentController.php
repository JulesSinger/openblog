<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Resources\CommentResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

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
        $requestData = $request->all();

        $validator = Validator::make($requestData,[
            'content' => 'required',
            'subject' => 'required',
            'post_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

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

    public function delete($id): JsonResponse
    {
        $comment = Comment::find($id);

        if (!$comment) {
            return response()->json([
                'message' => "Le commentaire avec l'id \"${id}\" n'existe pas."
            ], 404);
        }

        $comment->delete();

        return response()->json(['message' => 'Le commentaire à bien été supprimé']);

    }
}
