<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inscripciones', function (Blueprint $table) {
            $table->id('id_inscripcion');
            $table->unsignedBigInteger('id_estudiante');
            $table->unsignedBigInteger('id_curso');
            $table->date('fecha_inscripcion');
            $table->timestamps();

            $table->foreign('id_estudiante')->references('id')->on('estudiantes');
            $table->foreign('id_curso')->references('id')->on('cursos');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inscripciones');
    }
};
