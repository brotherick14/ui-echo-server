# UI echo server
![image](https://github.com/brotherick14/ui-echo-server/assets/54830246/891bdc1b-fac8-471b-b910-4feb37550145)

## Pasos para correr el proyecto en un contenedor Docker:

1. **Construye la imagen Docker**: 
    ```
    docker build -t ui-echo-server .
    ```

2. **Corre el contenedor Docker**: 
    ```
    docker run -p 4000:4000 ui-echo-server
    ```

El servidor debería estar corriendo en http://localhost:3000.
Para que el sitio muestre información tienes que inicializar primero el API.
https://github.com/brotherick14/api-echo-server
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
