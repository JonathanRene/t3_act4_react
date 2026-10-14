### Respuestas a las preguntas de la actividad:

**a) ¿Qué diferencia hay entre props y state en React?**
El **estado (state)** es información interna y privada de un componente, la cual puede cambiar con el tiempo (por ejemplo, cuando el usuario interactúa); al cambiar el estado, el componente se actualiza automáticamente en pantalla. En cambio, las **props (propiedades)** son datos externos que un componente padre le pasa a un componente hijo para configurarlo, y son de solo lectura (el hijo no puede modificarlas directamente).

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
La `key` funciona como un identificador único e irrepetible para cada elemento de la lista. Es fundamental porque le permite a React saber exactamente qué elemento en específico ha sido modificado, agregado o eliminado. Sin ella, React tendría que volver a dibujar toda la lista completa en cada cambio, lo cual afecta el rendimiento de la aplicación.

**c) Qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**
La función `useState` es un Hook que le permite a un componente "recordar" datos que van a estar cambiando mientras el usuario usa la aplicación. Te devuelve dos cosas: el valor actual y una función para actualizar ese valor. 
*Ejemplo en mi aplicación:* Lo utilicé en `App.jsx` con `const [tasks, setTasks] = useState([])` para almacenar el arreglo de las tareas. Cada vez que el usuario crea o borra una tarea mediante la función `setTasks`, la aplicación recuerda esos nuevos datos y actualiza la pantalla inmediatamente.

**d) Enlace de mi repositorio de GitHub:**
https://github.com/JonathanRene/t3_act4_react

**e) Enlace de mi proyecto ya desplegado en GitHub Pages:**
https://jonathanrene.github.io/t3_act4_react/
