# OWEN WILSON'S "WOW"

Owen Wilson's "WOW" es una aplicación diseñada para mostrar un listado de películas donde el actor Owen Wilson dice la palabrea "WOW"

## Características principales

- **Filtrado de películas** Tenemos dos opciones de filtrado. Pueden utilizarse por separado o conjuntamente.
  => Filtro por "Nombre" de la película.
  => Filtro por "Año" en el que se presentó la película.
- **Listado de películas** Se muestra un listado de películas donde el actor Owen Wilson ha dicho la palabra "WOW"
- **Detalle de cada película** Si pinchamos en una película nos enlaza con la página de detalle de esa película.

---

## Requisitos

Para ejecutar OWEN WILSON'S "WOW" en un entorno local, asegúrate de tener lo siguiente:

- Navegador moderno (Chrome, Firefox, Edge, etc.).
- Un servidor local (por ejemplo, [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en Visual Studio Code).

---

## Instrucciones para la ejecución

Sigue estos pasos para ejecutar ADAcheap en tu entorno local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Adalab/modulo-3-evaluacion-final-estherbg85.git
   cd modulo-3-evaluacion-final-estherbg85
   ```

2. **Abre el proyecto:**

   Abre los archivos del proyecto en tu editor de texto preferido (Visual Studio Code recomendado).

3. **Inicia un servidor local:**
   Si estás utilizando Visual Studio Code, puedes hacer clic derecho en el archivo `index.html` y seleccionar "Open with Live Server".

4. **Accede a la aplicación:**

   Una vez iniciado el servidor local, abre el navegador y ve a la dirección que el servidor indique (por ejemplo, `http://127.0.0.1:5500`).

---

## Estructura del proyecto

### Archivos principales

- **`App.jsx`:** Contiene la parte principal de la aplicación,junto con parte de la funcionalidad y estructura comprimida del html.
- **`Components`** Contiene distintos ficheros .jsx con las diferentes funcionalidades:
  - `Layout`
    => Header.jsx: Contiene el html del Header de la página.
  - `Movies`
    => FilterMovies.jsx: El html que engloba el campo de filtrado por nombre y la llamada a las funciones necesarias para darlo funcionalidad.
    => FiterYears.jsx: El html que engloba el campo de filtrado por Año y la llamada a las funciones necesarias para darlo funcionalidad.
    => MovieSceneList.jsx: El html que pinta la lista de tareas en la página.
    => MovieSceneItem.jsx: El html que pinta cada película traída del Api. Con:
    Poster: Imagen de la película.
    Movie: Título de la película.
    Year: Año de la película.
    Full_line: Frase donde dice la palabra "Wow".
  - `Pages`
    => LandingPage.jsx: Aquí nos encontramos la parte que queremos que se muestre siempre al cargar la página.
    => MovieSceneDetail.jsx: Aqui se muestra la película que hemos seleccionado en detalle. Aquí nos muestra:
    oster: Imagen de la película.
    Movie: Título de la película.
    Director: El director de la película.
    Full_line: Frase donde dice la palabra "Wow".
    Audio: El audio de la frase donde dice "Wow".
  - **`Lib`**
    => Hooks.js: Contiene el useEffect que usamos para pintar todo el listado de películas que nos traemos de la API
- **App.scss** Contine los import de todo el css usado en la aplicación y que está repartido en diferentes carpetas:
  - `Header.scss`
  - `Form.scss`
  - `CardList.scss`
  - `Detail.scss`

## Funcionalidades Clave

### Filtrado de películas

    1. Rellena el campo con el nombre de la película que buscas.
    2. Rellena el campo con el año de la película que buscas.

Se pueden rellenar indistintivamente. Solo usar el del nombre, solo usar el del año o, rellenar el de nombre y desde ese filtrado elegir el año en concreto.

### Listado de películas

    Una vez se carga la página esta nos muestra el listado de 50 películas donde el actor dice la palabra Wow y que nos hemos traído de una Api a través de un Fetch.
    Además las hemos organizado alfabeticamente por nombre.

### Detalle de cada película

    Al pinchar en una de las películas esta nos lleva al detalle de la misma. Donde además de visualizar lo anterior en el listado, aquí también hemos añadido un enlace al audio de la frase que dice el personaje.

## Tecnologías utilizadas

- **HTML5:** Para la estructura del contenido.
- **CSS3:** Para el diseño y la estética.
- **React:** Para la lógica interactiva de la aplicación.
- **API:** Para la generación del listado de películas.

## Autor

estherbg85

Esther Bonilla Girol
