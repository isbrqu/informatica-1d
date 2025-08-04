+++
date = '2025-08-03T14:50:16-03:00'
draft = false
title = 'Algoritmo'
+++


# Algoritmo

**Definición:** Un algoritmo es una secuencia de pasos ordenados lógica y cronológicamente para la resolución de un problema.


## Características de un algoritmo

Un algoritmo se define principalmente por sus pasos. Cada paso y el conjunto de estos, deben ser **simples**, **precisos** y **exactos**. Además deben tener un **orden lógico**, un **inicio** y un **fin**.


## Ejemplos de algoritmos

Algunos ejemplos de algoritmos son:
- Las instrucciones para andar en una bicicleta.
- Una receta de cocina.
- Los pasos para armar un mueble.
- Cómo utilizar un electrodoméstico.
- Obtener el mayor de cinco números dados.


## ¿Cómo implementar un algoritmo?

Los algoritmos se pueden expresar en:
- **Diagramas de flujo**
- **Pseudocódigo**
- **Código fuente**


### Diagramas de flujo

Representación gráfica que muestra el flujo de un proceso paso a paso.
- **Pros:** Visualmente intuitivo, ideal para comenzar.
- **Contras:** Poco práctico para algoritmos complejos o largos.


### Pseudocódigo

Descripción textual en lenguaje natural estructurado que simula código.
- **Pros:** Fácil de escribir y entender, sin necesidad de conocer un lenguaje de programación.
- **Contras:** No se puede ejecutar directamente en una computadora.


### Código fuente

Implementación formal en un lenguaje de programación específico.
- **Pros:** Ejecutable y funcional, permite validar el algoritmo.
- **Contras:** Requiere conocimientos técnicos y puede ser menos claro para principiantes.


## ¿Cómo implementar un algoritmo en pseudocódigo?

Antes de implementar un algoritmo en cualquier de sus formas, se debe tener un problema a resolver.

**Problema 1. Cambiar lámpara:** 
> Una lámpara se ha quemado y se posee otra lámpara como repuesto.
> ¿Cómo cambiar la lámpara quemada?


En **lenguaje natural**, responderíamos algo así como

> *"Quita la lámpara fundida y coloca la lámpara nueva"*.

Esto mismo, implementado en **pseudocódigo** (de muy **alto** **nivel**) se ve así:

```
INCIO
 | Quitar la lámpara fundida.
 | Colocar la lámpara nueva.
FIN
```

Si bien es cierto que son pocos pasos, si se entienden y se logra cambiar la lámpara, entonces es correcto.


Ahora bien, supongamos que estamos tratando de entrenar a **un robot para que haga la tarea**; en tal caso no funcionará el algoritmo, tendremos que ser **más específicos y claros** tomando en cuenta las **capacidades elementales** del robot.

El algoritmo en **pseudocódigo** más detallado (de un **nivel** más **bajo** que el anterior) sería:

```
INICIO
 | Colocar la escalera.
 | Subir a la escalera.
 | Quitar la lámpara quemada.
 | Bajar de la escalera.
 | Tomar la lámpara de repuesto.
 | Subir a la escalera.
 | Colocar la lámpara de repuesto.
 | Bajar de la escalera.
 | Quitar la escalera.
FIN
```

Es probable que **no todos pensamos exactamente los mismos pasos para resolver el problema**  de cambiar la lámpara, **pero si conducen de manera efectiva a realizar la tarea entonces estará en lo correcto**.


**Problema 2. Cómo prepara un mate:**

> Escribir en pseudocódigo de muy alto nivel, el algoritmo para preparar un mate.

**Solución:**
```
Inicio
 | Obtener mate, bombilla, yerba y agua caliente.
 | Cargar yerba en el mate.
 | Formar cavidad con la yerba.
 | Insertar bombilla.
 | Servir agua caliente.
 | Tomar mate.
Fin
```



**Problema 3.  Quitar una mancha de una remera:**

> Escribir en pseudocódigo de muy alto nivel, el algoritmo para quitar una macha de una  remera roja.

**Solución:**
```
Inicio
 | Identificar mancha.
 | Aplicar quitamanchas sobre la mancha.
 | Dejar actuar quitamanchas.
 | Lavar remera.
 | Secar remera.
Fin
```


## Ejercitación

**Problema 4. Cómo hacerse un té**
>  Escribir un pseudocódigo (de muy alto nivel) que indique los pasos básicos para preparar un té.

**Problema 5. Salir de casa en un día de lluvia**
> Escribir los pasos principales para prepararse y salir de casa considerando que está lloviendo. Escribirlo en pseudocódigo de muy alto nivel.

**Problema 6. Cargar el celular cuando queda sin batería**
> Describir en pseudocódigo (de muy alto nivel) las acciones necesarias para cargar un teléfono celular que se quedó sin batería.


## Nivel de abstracción del lenguaje

La cantidad de pasos depende en gran medida, del **nivel de abstracción** (alto o bajo) del lenguaje (o notación) que se use para implementar el algoritmo.

Si el algoritmo se implementa en un **lenguaje de** un **nivel** de abstracción **alto** entonces sus pasos serán **menos detallados y menos precisos para** que **una computadora** los *realice*, pero serán **más *entendibles* por un humano**.

Si el algoritmo se implementa en un **lenguaje de** un **nivel** de abstracción **bajo** entonces sus pasos serán **menos *entendibles* por un humano**, pero serán **más detallados y más precisos para** que **una computadora** los *realice*.
