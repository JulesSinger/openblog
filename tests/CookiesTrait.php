<?php

namespace Tests;

use Illuminate\Support\Collection;
use Illuminate\Testing\TestResponse;
use Symfony\Component\HttpFoundation\Cookie;

trait CookiesTrait
{
    /**
     * Collect all cookies from a response
     *
     * @param TestResponse $response
     * @return Collection
     */
    protected function getCookies(TestResponse $response): Collection
    {
        return collect($response->headers->getCookies());
    }

    /**
     * Get a specific cookie
     *
     * @param TestResponse $response
     * @param string $name
     * @return Cookie|null
     */
    protected function getCookie(TestResponse $response, string $name)
    {
        $cookies = $this->getCookies($response);

        $index = $cookies->search(function ($cookie) use ($name) {
            return $cookie->getName() === $name;
        });

        return $cookies->get($index, null);
    }
}