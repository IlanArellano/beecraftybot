# Bot de pruebas (el nombre es temporal)

## Requisitos

El bot esta funcionando en Nodejs por lo que deben de tener instalado la ultima version en su computadora y la ultima version de NPM.

## Instalacion

Instalar los modulos que necesitan el bot

```
npm install
```

Para iniciar el proyecto:

```
npm start
```

### Patrón de diseño

Todos los comandos se ubican en la carpeta de /commands con el respectivo nombre del comando, su estructura esta basada en el siguiente objeto

_Dí cómo será ese paso_

```
 name: Nombre del comando (lo que el usuario debe de tipar para que ejecute)
  description?: La descripcion del comando
   args: activa o desactiva los argumentos
    execute(message, args) {
        /*Logica del comando

          message: es la respuesta que dará
          Discord en el chat, viene del parametro del
          evento 'message' (pueden consultar la documentacion)

          args: son los argumentos que recibe el comando y van seguido despues
          de escribir el comando, se separan cuando se hace un espacio y lo acomoda
          en un arreglo, pueden desactivar los argumentos de la propiedad args para
          lanazarles una advertencia al usuario de que ese comando no acepta
          argumentos
           */
    }
```

## Documentación

[Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
