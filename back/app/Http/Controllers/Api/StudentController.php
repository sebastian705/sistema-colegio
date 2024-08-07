<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    public function index()
    {
        $students = Student::all();
        return ['data' => $students];
    }


    public function store(Request $request)
    {
        $student = Student::create($request->all());
        return response()->json($student, 201);
    }


    public function show(string $id)
    {
        $student = Student::find($id);
        return $student;
    }


    public function update(Request $request, string $id)
    {
        $student = Student::findOrFail($id);
        $student->update($request->all());
        return response()->json($student, 200);
    }


    public function destroy(string $id)
    {
        Student::destroy($id);
        return response()->json(null, 204);
    }
}
