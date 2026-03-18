# Elvas - Aplicación Web

Este proyecto es una aplicación web completa que integra un backend desarrollado con Node.js y un frontend para la interacción con el usuario. Está estructurado siguiendo buenas prácticas de organización y separación de responsabilidades.

## Descripción

El proyecto permite gestionar información mediante una API REST y visualizarla a través de una interfaz web. Está dividido en dos partes principales: backend y frontend.

## Estructura del Proyecto

- backend: Contiene la lógica del servidor, controladores, modelos y configuración de la base de datos  
- frontend: Contiene la interfaz de usuario de la aplicación  

## Funcionalidades

- Creación de registros  
- Consulta de información  
- API REST  
- Conexión a base de datos  
- Interacción desde el frontend  

## Tecnologías utilizadas

### Backend
- Node.js  
- Express  
- JavaScript  

### Frontend
- HTML  
- CSS  
- JavaScript  

## Configuración del entorno

### 1. Clonar el repositorio

```bash
git clone https://github.com/oslyn2808/PaginaEmpresaDeLimpieza.git
```

### 2. Configurar el backend

Ir a la carpeta backend:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear archivo `.env` en la raíz de la carpeta backend con el siguiente contenido:

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
```

Ejecutar el servidor:

```bash
npm start
```

### 3. Ejecutar el frontend

Ir a la carpeta frontend y abrir el archivo principal (por ejemplo `index.html`) en el navegador, o utilizar un servidor local.

## Objetivo del proyecto

Este proyecto fue desarrollado con el objetivo de practicar el desarrollo de aplicaciones web completas, integrando backend y frontend, así como la gestión de datos mediante una API.

## Autor

- Oslyn Delgado Rojas
