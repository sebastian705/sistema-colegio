<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    
    public function index()
    {
        $courses = Course::all();
        return ['data' => $courses];
    }

    public function store(Request $request)
    {
        $course = Course::create($request->all());
        return response()->json($course, 201);
    }

    public function show(string $id)
    {
        $course = Course::find($id);
        return $course;
    }

    public function update(Request $request, string $id)
    {
        $course = Course::findOrFail($id);
        $course->update($request->all());
        return response()->json($course, 200);
    }

    public function destroy(string $id)
    {
        Course::destroy($id);
        return response()->json(null,204);
    }
}
