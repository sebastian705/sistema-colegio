# Sistema de Colegio

## Descripción

Esta aplicación es un sistema de gestión para colegios, que permite la administración de estudiantes, cursos y profesores. La API está desarrollada con Laravel y el frontend está construido con React.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
  - [Backend (Laravel)](#backend-laravel)
  - [Frontend (React)](#frontend-react)
- [Uso](#uso)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Características

- **Gestión de Estudiantes**: Agregar, listar, actualizar y eliminar estudiantes.
- **Gestión de Cursos**: Crear, listar, actualizar y eliminar cursos.
- **Gestión de Profesores**: Añadir, listar, actualizar y eliminar profesores.
- **Autenticación**: Registro y login de usuarios.

## Tecnologías

- **Backend**: Laravel
- **Frontend**: React
- **Base de Datos**: MySQL (u otra compatible)
- **Autenticación**: JWT (JSON Web Tokens)

## Instalación

### Backend (Laravel)

1. **Clona el repositorio del backend**:

    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio_backend.git
    ```

2. **Navega a la carpeta del backend**:

    ```bash
    cd tu_repositorio_backend
    ```

3. **Instala las dependencias**:

    ```bash
    composer install
    ```

4. **Configura el archivo `.env`**:

    Copia el archivo `.env.example` a `.env` y configura tus credenciales de base de datos y otras variables de entorno.

5. **Genera la clave de aplicación**:

    ```bash
    php artisan key:generate
    ```

6. **Corre las migraciones para crear la base de datos**:

    ```bash
    php artisan migrate
    ```

7. **Inicia el servidor**:

    ```bash
    php artisan serve
    ```

### Frontend (React)

1. **Clona el repositorio del frontend**:

    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio_frontend.git
    ```

2. **Navega a la carpeta del frontend**:

    ```bash
    cd tu_repositorio_frontend
    ```

3. **Instala las dependencias**:

    ```bash
    npm install
    ```

4. **Configura el archivo `.env`**:

    Crea un archivo `.env` en la raíz del proyecto y define la URL de la API:

    ```env
    REACT_APP_API_URL=http://localhost:8000/api
    ```

5. **Inicia el servidor de desarrollo**:

    ```bash
    npm start
    ```

## Uso

### Backend

La API estará disponible en `http://localhost:8000/api`. Puedes probar los endpoints usando herramientas como Postman o cURL. Asegúrate de que el backend esté en ejecución antes de hacer peticiones.

### Frontend

Accede a la aplicación en `http://localhost:3000`. La interfaz de usuario se comunicará con el backend a través de la URL configurada en el archivo `.env`.

## Contribución

¡Contribuciones son bienvenidas! Sigue estos pasos para contribuir:

1. **Haz un fork del repositorio**.
2. **Crea una rama** para tu característica (`git checkout -b feature/nueva-caracteristica`).
3. **Realiza los cambios** y haz commit (`git commit -am 'Añadir nueva característica'`).
4. **Empuja tu rama** (`git push origin feature/nueva-caracteristica`).
5. **Crea un Pull Request**.

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Puedes contactarme en [tu_correo@example.com](mailto:tu_correo@example.com) o en [tu perfil de GitHub](https://github.com/tu_usuario).
