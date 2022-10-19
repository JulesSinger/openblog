<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    /**
     * Display a specific category.
     *
     * @return array
     */
    public function index($category_id)
    {
        return CategoryResource::collection(Category::where('id', $category_id)->get());
    }

    public function test()
    {
        return CategoryResource::collection(Category::all());
    }

    /**
     * Display a listing of the categories
     *
     * @return array
     */
    public function list()
    {
        return CategoryResource::collection(Category::all());
    }

    public function insert(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required'
        ]);

        $payload = $request->only(['name', 'image']);

        $category = new Category();
        $category->name = $payload['name'];
        $category->image = $payload['image'];
        $category->save();

        return response()->json($category->toArray());
    }

    /**
     * Update a project
     *
     * @param mixed $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update($id, Request $request) : JsonResponse
    {
        $category = Category::find($id);

        $payload = $request->only(['name', 'image']);

        if($payload['name'] != '') {
            $category->name = $payload['name'];
        }

        if($payload['image'] != '') {
            $category->image = $payload['image'];
        }
        
        $category->save();

        return response()->json($category->toArray());
    }
    

    public function delete($id): JsonResponse
    {
        $category = Category::find($id);
        
        if (!$category) {
            return response()->json([
                'message' => "La catégorie avec l'id \"${id}\" n'existe pas."
            ], 404);
        }

        $posts = Post::where('category_id', $id)->get();
        if(count($posts->toArray()) == 0) {
            $category->delete();
        } else {
            return response()->json([
                'message' => "Vous ne pouvez pas supprimer une catégorie ayant des articles associés."
            ], 401); 
        }

        return response()->json(['message' => 'La catégorie à bien été supprimée']);

    }
}
