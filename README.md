## Aplicación para la gestión de pólizas (Full Stack)
Este sistema consiste en una aplicación para la visualización de pólizas de seguro.
La arquitectura está dividida en un backend con Node, Express y Typescript y un frontend con Angular 16 estilizado con Bootstrap
## Instrucciones para el despligue del proyecto

### 1. Levantar el backend
Abrir una terminal en la carpeta del proyecto
```bash
cd back
```

**Instalar el proyecto:**
```bash
npm install
```
**Arrancar en modo desarrollo:**
```bash
npm run dev
```

El servidor arrancará y escuchará peticiones en `http://localhost:3000/api/policies`

### 2. Levantar el frontend
Abrir una **nueva terminal** en la carpeta del proyecto (sin cerrar la anterior)
```bash
cd front
```

**Instalar el proyecto:**
```bash
npm install
```
**Arrancar la aplicación Angular**
```bash
ng serve -o
```
Este comando compilará la aplicación la abrirá automáticamente en una nueva ventana de navegador en `http://localhost:4200`

## Pregunta de reflexión
**En una SPA Angular de escala media-grande. ¿Cómo organizarías la gestión del estado de la aplicación? ¿Usarías NgRx, signals, servicios con BehaviourSubject u otra solución? Justifica tu elección en función del contexto.**
Para guardar estado descartaría BehaviorSubject: en las versiones recientes de Angular ha quedado como opción heredada. Lo reservaría para flujos asíncronos, como tiempo real o debounce. El NgRx clásico solo compensa en apps con muchos equipos o con auditoría estricta, porque a cambio exige mucho boilerplate y cuesta más aprenderlo. Como las signals son la apuesta fuerte de Angular para el estado, optaría por NgRx SignalStore: es más ligero que el clásico, mantiene una buena estructura y se puede limitar a cada funcionalidad o ruta.