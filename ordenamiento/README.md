# ORDENAMIENTOS

## SELECTION SORT

Este algoritmo, también conocido como _Algoritmo de Ordenamiento de Selección_, consiste en encontrar el menor de todos los elementos de una lista o arreglo e intercambiarlo con el que está en la primer posición. Luego el segundo más pequeño, y así sucesivamente hasta ordenar todo el arreglo.

## BUBBLE SORT

Este algoritmo, también conocido como _Algoritmo de Ordenamiento Burbuja_, es sencillo pero ineficiente que busca mediante repetidas comparaciones de los elementos adyacentes ordenar un conjunto de elementos.

## MERGE SORT

Este algoritmo, también conocido como _Algoritmo de Ordenamiento de Combinación_, es un algoritmo de ordenamiento externo estable basado en la técnica _divide y vencerás_. La idea es dividir la lista por la mitad una y otra vez hasta que cada pieza tenga solo un elemento de longitud.

## QUICK SORT

Este algoritmo, también conocido como _Algoritmo de Ordenamiento Rápido_, se basa en la técnica _divide y vencerás_. Su funcionamiento es:

- Selección de un elemento de la lista llamado **Pivote** (normalmente es el elemento que se aloja en la mitad de la lista).

- La lista se reordenará de manera que todos los elemento que estarán antes del **Pivote** serán menores que él y los elementos posteriores serán mayores que él. El **Pivote** ocuparía el lugar central de la lista.

- Al tener dos sublistas (una con valores menores al **Pivote** y otra con valores mayores), llamamos recursivamente el método para cada una de las sublistas, que se ejecutarán una y otra vez hasta que las sublistas tengan una longitud menor a 2.
