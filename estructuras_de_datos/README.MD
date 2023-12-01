# ESTRUCTURAS DE DATOS

## QUEUE

Una _Queue_ o _Cola_ es una estructura de datos lineal que sigue la filosofía **FIFO** (First In - First Out), que significa el primer elemento que entre a la cola será el primero en salir, y el último elemento en entrar a la cola será el último en salir.

A diferencia de una lista, array, matriz, etc., en una _Queue_ no es posible acceder a un elemento aleatorio de la cola, de la misma manera sólo se pueden añadir elementos al final de la cola y retirar elementos en la parte inicial de la cola, si no se cumplen esas funcionalidades se pierde el sentido de la estructura de datos _Queue_.

Los métodos principales que deben tener una _Queue_ son:

- `enqueue`: Agregar un elemento al final de la _Queue_.
- `dequeue`: Retirar un elemento al inicio de la _Queue_.

Además podemos añadir métodos auxiliares como:

- `isEmpty`: Comprueba si la _Queue_ está vacía.
- `isFull`: En caso de añadir una funcionalidad donde se requiera un tamaño fijo de la _Queue_ se puede usar este método para verificar si la _Queue_ está completa.
- `peek`: Nos muestra los valores de la _Queue_.

_Otros métodos que podemos añadir son `length` (para ver el tamaño actual de la Queue), `front` (para obtener el primer valor actual de la Queue) y `back` (para obtener el último valor actual de la Queue)._

