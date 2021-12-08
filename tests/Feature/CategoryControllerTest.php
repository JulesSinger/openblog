<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryControllerTest extends TestCase
{
    /**
     * @test
     *
     */
    public function itListsCategories()
    {
        $response = $this->get('/api/categories');

        $response->assertOk();
        $this->assertCount(10, $response->json('data'));
    }
}
