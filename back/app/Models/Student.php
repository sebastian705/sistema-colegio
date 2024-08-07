<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table = 'estudiantes';
    protected $fillable = [
        'nombre',
        'apellido',
        'email',
        'fecha_nacimiento'
    ];
}
