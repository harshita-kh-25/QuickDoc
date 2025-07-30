<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Document;

class UploadController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'file' => 'required|file|mimes:pdf,docx,jpg,jpeg,png|max:2048',
                'category' => 'required|string|max:255',
            ]);

            $file = $request->file('file');
            $fileName = time() . '_' . $file->getClientOriginalName();

            // Save file
            $file->move(storage_path('app/public/documents'), $fileName);
            $filePath = 'documents/' . $fileName; // Relative path inside storage/public

            // Save to DB
            Document::create([
                'filename' => $fileName,
                'filepath' => $filePath,
                'category' => $request->category,
            ]);

            $fileUrl = asset('storage/' . $filePath); // URL for browser access

            return response()->json([
                'message' => 'File uploaded successfully',
                'file_url' => $fileUrl,
                'category' => $request->category,
            ]);
        } catch (\Exception $e) {
            Log::error('Upload failed: ' . $e->getMessage());

            return response()->json([
                'message' => 'Upload failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
