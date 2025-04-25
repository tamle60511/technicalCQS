<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductsController extends Controller

{
    public function products()
    {
        return Inertia::render('templates/products');
    }
    public function wheel()
    {
        return Inertia::render('templates/products/wheel');
    }

    public function lightweight()
    {
        return Inertia::render('templates/products/lightweight');
    }

    public function grenenergy()
    {
        return Inertia::render('templates/products/grenenergy');
    }
    public function agricultura()
    {
        return Inertia::render('templates/products/agricultura');
    }
}
