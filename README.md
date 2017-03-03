# Objetivo

El objetivo es generar un ejercicio que se puede resolver en no más de 3 días, con el cual se llegue a realizar una aplicación funcional y por ende aprender (conocer) react y su stack asociado.  


# Ejercicio:
Crear un sistema básico de ventas y pagos.
El mismo debe contar con:
Una pantalla para registrar las ventas
Una pantalla para registrar los pagos
Una pantalla de reporte, que liste las ventas y pagos realizados

Las transacciones deberán ser gestionadas utilizando las facultades provistas por Redux (stores, reducers, ... )

# Tecnologías a utilizar.
Para el ejercicio descrito se debe utilizar el React.js, junto con Redux.
Se deberá usar Webpack para generar el bundle, así como librerías para la traducción a javascript puro. Respecto a esto último, se podrá utilizar un boilerplate como punto de partida, tal como https://github.com/werein/react
Para mantener un estilo uniforme, deberá utilizar componentes de Material.

##Tiempos
El ejercicio deberá ser completado en no más de 3 días



# Installation

## Package installation
```bash
$ npm install
```

## Use development server
For development server, webpack-dev-server is reasonable. It monitors update files and rebuild them automatically. Since the webpack cli command is registerd in `package.json` in this project, just type the following command to run webpack-dev-server:

```bash
$ npm start
```

Be careful! The webpack-dev-server rebuilds files in `src` automatically but the bundled files are just placed on its memory. Build manually by allowing next section (Build assets), if you want need the bundled files.


## Build assets
To put compiled files into `static` directory, type the following command.

```bash
$ npm run build
```
