<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\TeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get("/students", [StudentController::class, 'index']);
Route::get("/students/{id}", [StudentController::class, 'show']);
Route::post("/students", [StudentController::class, 'store']);
Route::delete("/students/{id}", [StudentController::class, 'destroy']);
Route::put("/students/{id}", [StudentController::class, 'update']);

Route::get("/teachers", [TeacherController::class, 'index']);
Route::get("/teachers/{id}", [TeacherController::class, 'show']);
Route::post("/teachers", [TeacherController::class, 'store']);
Route::delete("/teachers/{id}", [TeacherController::class, 'destroy']);
Route::put("/teachers/{id}", [TeacherController::class, 'update']);

Route::get("/courses", [CourseController::class, 'index']);
Route::get("/courses/{id}", [CourseController::class, 'show']);
Route::post("/courses", [CourseController::class, 'store']);
Route::delete("/courses/{id}", [CourseController::class, 'destroy']);
Route::put("/courses/{id}", [CourseController::class, 'update']);

Route::post("/login", [AuthController::class, 'login']);
Route::post("/register", [AuthController::class, 'register']);
Route::post("/logout", [AuthController::class, 'logout'])->middleware('auth:sanctum');
