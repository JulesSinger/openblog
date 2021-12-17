<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category_id' => $this->category_id,
            'title' => $this->title,
            'read_time' => $this->read_time,
            'author' => $this->author,
            'publication_date' => $this->publication_date->format('d/m/Y'),
            'image' => $this->image,
            'summary' => $this->summary,
            'comments' => $this->comments,
            'category' => $this->category,
        ];
    }
}
