<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DocumentController;

Route::get('/documents', [DocumentController::class, 'index']);
Route::post('/upload', [DocumentController::class, 'upload']);
Route::put('/documents/{id}/trash', [DocumentController::class, 'moveToTrash']);
Route::get('/documents/trash', [DocumentController::class, 'trashed']);
Route::put('/documents/restore/{id}', [DocumentController::class, 'restore']);
Route::get('/trashed-documents', [DocumentController::class, 'trashed']);
