<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TechnologiesController extends Controller
{
    public function hpdc()
    {
        return Inertia::render('templates/technologies/hpdc');
    }

    public function cnc()
    {
        return Inertia::render('templates/technologies/cnc');
    }

    public function gdc()
    {
        return Inertia::render('templates/technologies/gdc');
    }

    public function painting()
    {
        return Inertia::render('templates/technologies/painting');
    }

    public function assembly()
    {
        return Inertia::render('templates/technologies/assembly');
    }
}
