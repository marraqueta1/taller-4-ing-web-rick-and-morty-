# Taller 4: Consumo de API Rick and Morty con Ionic y React

**Autor:** Daniel Serey Aravena  
**Carrera:** Ingeniería en Informática, Pontificia Universidad Católica de Valparaíso (PUCV)

## 📝 Descripción de la Tarea
Este repositorio contiene la resolución del **Taller 4** de Ingeniería Web/Mobile. La aplicación fue construida utilizando **Ionic** y **React** con el objetivo de consumir la API pública de "The Rick and Morty" y mostrar la información de sus personajes.

## ⚙️ Proceso de Desarrollo y Lógica Implementada
Para cumplir con los requerimientos solicitados, se implementaron las siguientes características en el archivo principal (`PostsPage.tsx`):

1. **Gestión de Estados (`useState`):**
   - `personajes`: Almacena el arreglo de datos obtenidos desde la API.
   - `cargando`: Estado booleano para controlar el indicador visual mientras se espera la respuesta HTTP.
   - `error`: Captura y almacena mensajes en caso de que la petición falle.

2. **Consumo de API y Promesas (`fetch`):**
   - Se configuró el evento `onClick` en el botón principal para ejecutar la función de carga.
   - Se realizó la petición HTTP GET asíncrona a `https://rickandmortyapi.com/api/character`.
   - Se manejó el ciclo de vida de la petición utilizando `.then()` para procesar el JSON, `.catch()` para los errores y `.finally()` para detener el estado de carga.

3. **Renderizado de Interfaz (JSX e Ionic):**
   - Se implementó un indicador `<IonSpinner>` que se muestra de forma condicional.
   - Se utilizó el método `.map()` de React para iterar sobre el estado de los personajes y generar dinámicamente un `<IonCard>` por cada uno, mostrando su ID, imagen, nombre y especie (utilizando la propiedad `key` para optimizar el renderizado).
   - Se aplicó CSS personalizado (`PostsPage.css`) utilizando `display: grid` para organizar correctamente las tarjetas en la vista.

## 📸 Capturas de Pantalla de la Web Generada

*(A continuación se muestra la interfaz resultante de la aplicación)*

### 1. Estado Inicial y de Carga
![Estado de carga](./captura-1.png)

### 2. Despliegue de Personajes
![Personajes de Rick and Morty](./captura-2.png)
