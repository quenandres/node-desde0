

# `Sección 2`

### ` Fundamentos de Node - Primeros pasos`


Temas puntuales de la sección
En esta sección quiero que nos enfoquemos en varias introducciones a Node, puntualmente veremos:

- Preguntas comunes sobre Node
- Hola Mundo en Node
- Laboratorio con FileSystem
- Code Execution
- Event Loop

Tengan presente que el curso es 99% practico, pero la mayor parte de las presentaciones están en esta sección, porque me interesa que conozcamos el por qué de muchas cosas que sucederán cuando estén trabajando con Node en la vida real.

### `Preguntas comunes sobre NodeJS`
Node habilita que se pueda usar js en un ambiente que no sea un navegador web.
Construido sobre el motor v8 de google chrome.
Esta diseñado para realizar tareas de entrada y salida
Manejo de archivos cliente/servidor

_Caracteristicas_
- Asincronia
- Modulos nativos y de terceros
- Gestion de paquetes con NPM
- Construcción de servidores
- Escalabilidad
- Multiple plataforma
- Non-Blocking I/O: Casi ninguna funcion en Node bloquea la lectura, por lo que podemos tener cientos de peticiones sin bloquear el servidor esto gracias a libuv
- NPM (Node Package Manager)
- NPX (Node Package Execute)

https://nodejs.org/en/docs/guides/blocking-vs-non-blocking

#### I/O
Se refiere principalmente a la interacción con el disco duro del sistema.
- Blocking: Es cuando la ejecución del código debe de esperar a que se complete el proceso pero este a su vez, impide que se sigan ejecutando otras instruccipines en paralelo.


### `Hello World - En Node`

### `Archivos de JavaScript`
No es necesario definir la extension del archivo js
```bash
node .\app

Hola mundo!
```