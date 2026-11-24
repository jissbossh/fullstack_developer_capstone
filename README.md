# Cars Dealership Full-Stack Application

Este proyecto es una aplicación web responsiva para un concesionario de automóviles nacional. 
Permite a los usuarios ver las sucursales del concesionario y enviar reseñas.

## Tecnologías
- Frontend: React, Bootstrap
- Backend: Django, Node.js, Flask (Análisis de sentimientos)
- Base de datos: SQLite (Django), MongoDB (Reseñas)
- CI/CD: GitHub Actions
- Despliegue: Docker, IBM Cloud Code Engine

## Endpoints Principales
- `GET /djangoapp/get_dealers`: Obtiene todos los concesionarios.
- `GET /djangoapp/get_dealers/<state>`: Obtiene concesionarios por estado.
- `GET /djangoapp/dealer/<id>`: Obtiene detalles de un concesionario.
- `POST /djangoapp/login`: Inicia sesión.
- `POST /djangoapp/logout`: Cierra sesión.