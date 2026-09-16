# Taller 4

**Nombre:** Daniel Serey Aravena  

## Descripción de la Tarea
Se muestra todo el taller 4 orientado a la api de Rick and Morty

## Proceso de Desarrollo y Lógica Implementada
Se cumplió todo lo requerido y se implemento en el archivo principal (`PostsPage.tsx`):

1. **Gestión de Estados (useState):**
   - `personajes`: Almacena el arreglo de datos obtenidos desde la API.
   - `cargando`: Estado booleano para controlar el indicador visual mientras se espera la respuesta HTTP.
   - `error`: Captura y almacena mensajes en caso de que la petición falle.

2. **API y (`fetch`):**
   - Se configuró el evento `onClick` en el botón principal para ejecutar la función de carga.
   - Se realizó la petición HTTP GET asíncrona a `https://rickandmortyapi.com/api/character`.
   - Se manejó el ciclo de vida de la petición utilizando `.then()` para procesar el JSON, `.catch()` para los errores y `.finally()` para detener el estado de carga.

3. **Renderizado de Interfaz (JSX e Ionic):**
   - Se implementó un indicador `<IonSpinner>` que se muestra de forma condicional.
   - Se utilizó el método `.map()` de React para iterar sobre el estado de los personajes y generar dinámicamente un `<IonCard>` por cada uno, mostrando su ID, imagen, nombre y especie (utilizando la propiedad `key` para optimizar el renderizado).
   - Se aplicó CSS personalizado (`PostsPage.css`) utilizando `display: grid` para organizar correctamente las tarjetas en la vista.

## Capturas de Pantalla 

### 1. Estado Inicial y de Carga
https://imgur.com/a/XKXMAB4

### 2. Despliegue de Personajes
https://imgur.com/a/KamIaf6
