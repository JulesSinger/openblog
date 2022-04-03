<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Comment;

class CommentControllerTest extends TestCase
{
    /**
     * @test
     * test create a comment
     */
    public function itCreatesComment()
    {
        $response = $this->post('/api/comment', [
            'content' => 'Contenu du commentaire',
            'subject' => 'Sujet / Titre du commentaire',
            'post_id' => 1
        ]);

        $comment = Comment::last();                                        

        $response->assertOk();
        $this->assertEquals('Contenu du commentaire', $comment->content);
    }
}
