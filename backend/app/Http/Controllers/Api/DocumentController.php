<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Document;

class DocumentController extends Controller
{
    // Get all non-trashed documents
    public function index()
    {
        return Document::all();
        }

    // Upload a file
    public function upload(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $filepath = 'documents/' . $filename;
            $file->move(public_path('documents'), $filename);

            $document = new Document([
                'filename' => $filename,
                'filepath' => $filepath,
                'category' => $request->input('category', 'General'),
            ]);
            $document->save();

            return response()->json(['message' => 'Uploaded successfully!', 'document' => $document]);
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }

    // Move a document to trash
    public function moveToTrash($id)
    {
        $document = Document::findOrFail($id);
        $document->delete(); // soft deletes (sets deleted_at)
        return response()->json(['message' => 'Moved to trash successfully']);
    }
    
    // Get all trashed documents
    public function trashed()
{
    return Document::onlyTrashed()->get();

}

public function restore($id)
{
    $document = Document::onlyTrashed()->find($id);

    if (!$document) {
        return response()->json(['message' => 'Document not found or not trashed'], 404);
    }

    $document->restore();

    return response()->json(['message' => 'Document restored successfully']);
}



public function delete($id)
{
    $document = Document::onlyTrashed()->find($id);

    if (!$document) {
        return response()->json(['message' => 'Document not found or not in trash.'], 404);
    }

    $document->forceDelete();

    return response()->json(['message' => 'Document permanently deleted.']);
}

}
