<?php
use App\Http\Controllers\Frontend\AboutController;
use App\Http\Controllers\Frontend\TechnologiesController;
use App\Http\Controllers\Frontend\NewsController;
use App\Http\Controllers\Frontend\ProductsController;
use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Frontend\IndustriesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::get('about', [AboutController::class, 'about'])->name('about');
Route::get('news',[NewsController::class, 'news'] )->name('news');
Route::prefix('technologies')->name('technologies.')->group(function () {
    Route::get('/hpdc', [TechnologiesController::class, 'hpdc'])->name('hpdc');
    Route::get('/cnc', [TechnologiesController::class, 'cnc'])->name('cnc');
    Route::get('/gdc', [TechnologiesController::class, 'gdc'])->name('gdc');
    Route::get('/painting', [TechnologiesController::class, 'painting'])->name('painting');
});


Route::get('/products', [ProductsController::class, 'products'])->name('products');
Route::prefix('products')->name('products.')->group(function () {
    Route::get('/el-wheel', [ProductsController::class, 'wheel'])->name('el-wheel');
    Route::get('/lightweight', [ProductsController::class, 'lightweight'])->name('lightweight');
    Route::get('/gren-energy', [ProductsController::class, 'grenenergy'])->name('gren-energy');
    Route::get('/agricultura', [ProductsController::class, 'agricultura'])->name('agricultura');
});

Route::prefix('industries')->name('industries.')->group(function () {
    Route::get('/automotive', [IndustriesController::class, 'automotive'])->name('automotive');

});

Route::get('contact',[ContactController::class, 'contact'] )->name('contact');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
