<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;
use App\Http\Resources\QuoteResource;
use Illuminate\Http\JsonResponse;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return QuoteResource::collection(Quote::all());
    }

    public function insert(Request $request): JsonResponse
    {
        $request->validate([
            'author' => 'required',
            'content' => 'required'
        ]);

        $payload = $request->only(['author', 'content']);

        $quote = new Quote();
        $quote->content = $payload['content'];
        $quote->author = $payload['author'];
        $quote->save();

        return response()->json($quote->toArray());
    }

    public function delete($id): JsonResponse
    {
        $quote = Quote::find($id);

        if (!$quote) {
            return response()->json([
                'message' => "La citation avec l'id \"${id}\" n'existe pas."
            ], 404);
        }

        $quote->delete();

        return response()->json(['message' => 'La citation à bien été supprimée']);

    }
}
