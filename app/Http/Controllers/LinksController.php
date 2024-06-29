<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LinksController extends Controller
{
    public function redirect()
    {
        return view('home.index');
    }
}
