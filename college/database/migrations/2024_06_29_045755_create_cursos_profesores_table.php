<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('cursos_profesores', function (Blueprint $table) {
            $table->foreignId('id_curso')->constrained('cursos');
            $table->foreignId('id_profesor')->constrained('profesores');
            $table->primary(['id_curso', 'id_profesor']);
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('cursos_profesores');
    }
};
