<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function search(Request $request)
    {
        $query = Category::query();

        // si le parametre s existe dans la requete, cherche les categories qui ont la chaine 's' dans leur nom
        if($s = $request->input('s')) {
            $query->where('name', 'regexp', "/.*$s/i");
        }
        
        // si le param sort existe dans la requete, trie les categ par rapport a la valeur donnee au sort (croissant, décroissant)
        if($sort = $request->input('sort')) {
            $query->orderBy('name', $sort); // $sort = asc or desc
        }
        
        // nombre total de category
        $total = $query->count();

        // nb de categories par page
        $perPage = 50;
        // recuperation du parametre page, on set sa val a 1 s'il existe pas
        $page =$request->input('page', 1);
        // on prend les articles en commencant a la page voulant et on en prend le nb de perpage.
        $result = $query->offset(($page-1) * $perPage)->limit($perPage)->get();

        return [
            'data' => $result,
            'total' => $total,
            'page' => $page,
            'last_page' => ceil($total/$perPage)
        ];
    }
}

