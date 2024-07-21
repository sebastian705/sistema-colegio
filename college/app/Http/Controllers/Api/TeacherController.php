<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{

    public function index()
    {
        $teachers = Teacher::all();
        return ['data' => $teachers];
    }

    public function store(Request $request)
    {
        $teacher = Teacher::create($request->all());
        return response()->json($teacher, 201);
    }

    
    public function show(string $id)
    {
        $teacher = Teacher::find($id);
        return $teacher;
    }

    
    public function update(Request $request, string $id)
    {
        $teacher = Teacher::findOrFail($id);
        $teacher->update($request->all());
        return response()->json($teacher, 200);
    }

    
    public function destroy(string $id)
    {
        Teacher::destroy($id);
        return response()->json(null, 204);
    }
}
