<?php

namespace App\Http\Controllers\Frontend;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndustriesController extends Controller
{
    public function automotive()
    {
        return Inertia::render('templates/industries/automotive');
    }

    public function lightweight()
    {
        return Inertia::render('templates/industries/motorcycle');
    }

    public function grenenergy()
    {
        return Inertia::render('templates/industries/grenenergy');
    }
    public function agricultura()
    {
        return Inertia::render('templates/industries/agricultura');
    }
}
