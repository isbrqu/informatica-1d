+++
date = '2025-08-10T23:38:02-03:00'
draft = false
title = 'Programa'
+++

<style>
.my-table td, .my-table th {
  text-align: center;
}

p:has(img:only-child) {
  text-align: center;
}
</style>

# Algoritmo. Parte 2. Programa

## Programa

**Definición**: Un programa es la implementación de un algoritmo en un lenguaje de programación listo para su ejecución.

Mientras que **un algoritmo es una idea abstracta** de una secuencia de pasos ordenada que puede ser escrito (implementado) en un diagrama de flujo, pseudocódigo o código fuente, **solo se llama programa a un algoritmo escrito en código fuente** o en **un pseudocódigo lo suficientemente bien definido** como para que una computadora lo ejecute.

## Elementos básicos de un programa

El ser humano **razona** a partir de los datos que recibe del exterior, los cuales se **almacenan** en su **cerebro**. De forma similar, la computadora **procesa** datos provenientes del exterior, que se **guardan** en su **memoria principal**, conocida como **R.A.M.** (Memoria de Acceso Aleatorio).  La R.A.M. está formada por numerosas posiciones o celdas, numeradas de manera consecutiva, capaces de almacenar información. 

Tanto el ser humano como la computadora, además de recibir y almacenar datos, pueden **interactuar** con otras personas o con otros sistemas informáticos.

A continuación exploraremos cómo una computadora **recibe** y **almacena** datos del exterior, así como las formas en que **interactúa** a través de mensajes simples.

### Cómo almacena. Variables

**Definición**: Una variable es una posición de memoria que almacena un valor (o dato).

Antes de ver como recibir datos tenemos que tener algún deposito en donde guardarlos.
En un programa hay datos que van cambiando durante el desarrollo del mismo. Para representar y manejar estos datos se usan las **VARIABLES**.

Las **variables** ocupan posiciones de memoria y **contienen valores**. Estas se identifican por un **nombre** y un **tipo de dato**.

- El **nombre** brinda un acceso familiar y reconocible para acceder al valor de la variable.
- El **tipo de dato** indica que valores puede contener y qué operaciones se pueden realizar con la variable.

### Nombre de una variable

**Definición**: Es un identificador que permite referenciar una variable.

#### Características del nombre de una variable

- El nombre de una variable tiene que ser *significativo*.
	- Ejemplos: `suma`, `nombre3`, `esAlto`.
	- No ejemplos: `s`, `d2`, `l2ix`.
- No pueden haber nombres repetidos en un mismo programa.
- No se pueden usar palabras reservadas por el lenguaje de programación.
- El primer carácter debe ser una **letra** o un guión bajo (`_`).
- Los siguientes caracteres pueden ser letras minúsculas, letras mayúsculas y/o números.
- No puede contener espacios, caracteres especiales, signos de puntuación o letras acentuadas.
  - Espacios: `space`, `enter`, `tab`, etc.
  - Caracteres especiales: `%`, `$`, `&`, `@`, `.`, etc.
  - Signos de puntuación: `.`, `;`, `,`, etc.
  - Letras acentuadas: `ñ`, `ú`, `ö`, `Å`, etc.

<table border="1" class="my-table">
	<thead>
		<tr>
			<th>Nombres válidos</th>
			<th>Nombres inválidos</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>numero1</code></td>
			<td><code>número</code></td>
		</tr>
		<tr>
			<td><code>descuento</code></td>
			<td><code>20descuento</code></td>
		</tr>
		<tr>
			<td><code>totalDeRecargo2</code></td>
			<td><code>total de recargo 2</code></td>
		</tr>
		<tr>
			<td><code>sumaSalarios</code></td>
			<td><code>suma$</code></td>
		</tr>
		<tr>
			<td><code>seis</code></td>
			<td><code>algoritmo</code></td>
		</tr>
	</tbody>
</table>

### Tipo de dato

**Definición:** El tipo de dato es un indicador que determina los **valores** que puede guardar una variable y las **operaciones** que se pueden realizarse con ella.

Un dato o valor puede ser un número entero como el `34`, una palabra o varias palabras como `"Hola mundo"` o valores lógicos (booleanos) como `verdadero` y `falso`.
Estos son los tres tipos de datos que usaremos:

<table border="1" class="my-table">
	<thead>
		<tr>
			<th>Tipo de dato</th>
			<th>Ejemplos de valores</th>
			<th>Operaciones</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Numérico</td>
			<td><code>-10</code>, <code>0</code>, <code>35</code></td>
			<td>Suma, resta, multiplicación, división, etc.</td>
		</tr>
		<tr>
			<td>Texto</td>
			<td><code>"Permite espacios"</code><br><code>"2 ñandúes"</code></td>
			<td>Concatenación.</td>
		</tr>
		<tr>
			<td>Lógico</td>
			<td><code>verdadero<code/><br><code>falso<code/></td>
			<td>Negación, conjunción y disyunción.</td>
		</tr>
	</tbody>
</table>

#### Ejercitación

Indicar cuales de los siguientes nombres de variables son **válidos** y **significativos**:

<table border="1" class="my-table">
	<tr>
		<td><code>s2k</code></td>
		<td><code>$total</code></td>
	</tr>
	<tr>
		<td><code>descuento</code></td>
		<td><code>cantidadDeNiños</code></td>
	</tr>
	<tr>
		<td><code>nombreMoneda</code></td>
		<td><code>litrosAgua</code></td>
	</tr>
	<tr>
		<td><code>inc</code></td>
		<td><code>FinAlgoritmo</code></td>
	</tr>
	<tr>
		<td><code>metros</code></td>
		<td><code>altura2e</code></td>
	</tr>
</table>

#### Etapas de una variable

Una variable pasa por distintas etapas: Definición (o declaración), inicialización, asignación y obtención del valor.

##### Definición

En esta etapa se crea la variable con algún nombre y se indica de qué tipo de dato es.

Ejemplo de cómo definir una variable llamada `apellido` como tipo `Texto` en PSeInt:

```text
Algoritmo DefinirVariableTexto
  Definir apellido Como Texto;
FinAlgoritmo
```

Ejemplo de cómo definir una variable llamada `edad` como tipo `Numerico` en PSeInt:

```plain
Algoritmo DefinirVariableNumerica
  Definir edad Como Numerico;
FinAlgoritmo
```

Ejemplo de cómo definir una variable llamada `esMayorDeEdad` como tipo `Logico` en PSeInt:

```plain
Algoritmo DefinirVariableLogica
  Definir esMayorDeEdad Como Logico;
FinAlgoritmo
```

En muchos lenguajes de programación, incluido PSeInt, **no se permite definir dos variables con el mismo nombre**. El siguiente código en PSeInt muestra un error en la línea 3 indicando esto mismo.

```plain
Algoritmo DefinirConError
  Definir numeroDocumento como Numerico;
  Definir numeroDocumento como Texto;
FinAlgoritmo
```

#### Inicialización

Esta etapa se denomina así porque es cuando la variable obtiene su valor inicial o primer valor, siempre dependiendo de su tipo de dato previamente asignado. Si bien algunos lenguajes de programación 

Ejemplo de cómo inicializar una variable llamada `apellido` de tipo `Texto` en PSeInt:

```plain
Algoritmo InicializarTexto
  Definir apellido Como Texto;
  apellido <- "Gonzaléz";
FinAlgoritmo
```

Ejemplo de cómo inicializar una variable llamada `edad` como tipo `Numerico` en PSeInt:

```plain
Algoritmo InicializarNumerico
  Definir edad Como Numerico;
  edad <- 12;
FinAlgoritmo
```

Ejemplo de cómo inicializar una variable llamada `esMayorDeEdad` como tipo `Logico` en PSeInt:

```plain
Algoritmo InicializarLogico
  Definir esMayorDeEdad Como Logico;
  esMayorDeEdad <- Verdadero;
FinAlgoritmo
```

Como se observa en los tres ejemplos hechos en PSeInt, antes de inicializar una variable es necesario definir su tipo de dato. Para inicializarla, se debe escribir en una sola línea: primero el nombre de la variable, luego los caracteres `<-` y finalmente un valor.

#### Asignación

Aunque la asignación se escribe de la misma manera que la inicialización, se diferencia en que no siempre corresponde al primer valor de la variable, sino que puede implicar la modificación de su contenido. Esta operación puede considerarse _destructiva_, ya que, en principio, una vez realizada el valor anterior no puede recuperarse dentro de la misma variable.

Ejemplo de cómo asignar en la línea 4 un nuevo valor `Texto` en PSeInt:

```plain
Algoritmo AsignarConTexto
  Definir apellido Como Texto;
  apellido <- "González";
  apellido <- "Méndez";
FinAlgoritmo
```

Ejemplo de cómo asignar en la línea 4 un nuevo valor `Numerico` en PSeInt:

```plain
Algoritmo AsignarConTexto
  Definir edad Como Numerico;
  edad <- 12;
  edad <- 0;
FinAlgoritmo
```

Ejemplo de cómo asignar en la línea 4 un nuevo valor `Logico` en PSeInt:

```plain
Algoritmo AsignarConTexto
  Definir esMayorDeEdad Como Logico;
  esMayorDeEdad <- Verdadero;
  esMayorDeEdad <- Falso;
FinAlgoritmo
```

En estos ejemplos se puede ver que **la inicialización es solo un caso especial de asignación**. A la derecha de los caracteres `<-` pueden ir más *cosas* que solo valores, puede haber otra variable y operaciones, como se verá en la siguiente etapa.

#### Obtención del valor

Una variable se encuentra en la etapa de obtención de su valor cuando aparece a la derecha de la instrucción de asignación, es decir, a la derecha de los caracteres `<-` en PSeInt. En este caso, la variable no se utiliza para cambiar su contenido, sino para _proporcionar_ su valor a una operación u otra instrucción.

Ejemplo de cómo obtener el valor que guarda `apellido` para concatenar a la izquierda otro texto en la línea 5 en PSeInt:

```plain
Algoritmo ObtenerValorDeVariable
  Definir apellido Como Texto;
  Definir nombreCompleto Como Texto;
  apellido <- "González";
  nombreCompleto <- "Martín " + apellido;
FinAlgoritmo
```

Ejemplo de cómo obtener el valor que guarda `edad` para restar en la línea 5 en PSeInt:

```plain
Algoritmo ObtenerValorDeVariable
  Definir edad Como Numerico;
  Definir aniosFaltantes Como Numerico;
  edad <- 12;
  aniosFaltantes <- 18 - edad;
FinAlgoritmo
```

Ejemplo de cómo obtener el valor que guarda `esMayorDeEdad` para negarlo en la línea 5 un nuevo valor `Logico` en PSeInt:

```plain
Algoritmo ObtenerValorDeVariable
  Definir esMayorDeEdad Como Logico;
  Definir esMenorDeEdad Como Logico;
  esMayorDeEdad <- Verdadero;
  esMenorDeEdad <- no esMayorDeEdad;
FinAlgoritmo
```

### Cómo interactuar. Lectura por teclado.

Para recibir datos de la persona que utilice nuestro programa (a la que llamaremos _usuario_), es necesario contar con una instrucción que le indique a la computadora que espere a que se escriba algo en el teclado y, al presionar la tecla `Enter`, lea lo ingresado y lo guarde en un lugar donde pueda ser utilizado.

En PSeInt se utiliza la instrucción `Leer` seguido del nombre de la variable que deseamos almacenar el dato recibido por el usuario. Ejemplo:

```plain
Algoritmo LeerPorElTeclado
  Definir edad Como Numerico;
  Leer edad;
FinAlgoritmo
```

Lo ingresado por el usuario debe coincidir con el tipo de dato definido para la variable en la que será almacenado, sino mostrará un error.
 
![lectura-texto 1](../img/lectura-texto-1.gif)

Esto ocurre principalmente con variables de tipo `Numerico`. En cambio, con variables de tipo `Texto` no sucede, ya que los caracteres numéricos se interpretan simplemente como texto.

![lectura-numero-como-texto](../img/lectura-numero-como-texto.gif)

Sin embargo, dependiendo del lenguaje de programación, intentar realizar operaciones numéricas puede producir errores o resultados inesperados.
 
Por ejemplo, el siguiente código en PSeInt no puede ejecutarse porque (en la línea 5) el carácter `+` puede interpretarse tanto como una suma como una concatenación. Ante esta ambigüedad, al combinar el valor `10` (de tipo `Numerico`) con la variable `edad` (de tipo `Texto`), el programa impide su ejecución.

```plain
Algoritmo LeerPorElTecladoConError
  Definir edad Como Texto;
  Definir aumento Como Texto;
  Leer edad;
  aumento <- edad + 10;
FinAlgoritmo
```

### Cómo mostrar. Escritura en pantalla.

Hasta el momento solo se han guardado datos predefinidos por nosotros o leídos por el usuario. Para mostrar los resultados de nuestro algoritmo en la pantalla de la computadora se debe utilizar una instrucción especifica para eso. En PSeInt dicha instrucción es `Escribir`, que hace referencia a que la computadora escribirá en la terminal los valores que le indiquemos a la derecha de esta *palabra clave*.

Ejemplo simple de como usar `Escribir` en PSeInt

```plain
Algoritmo EscribirEnPantalla
  Escribir "Hola mundo!";
FinAlgoritmo
```

Para mostrar el valor de una variable con un mensaje se puede usar la coma (`,`) como separador de parámetros.

```plain
Algoritmo EscribirEnPantalla
  Definir nombre Como Texto;
  nombre <- "Javier";
  Escribir "El nombre es: ", nombre;
FinAlgoritmo
```

![prueba-escribir](../img/prueba-escribir.gif)

Esto también puede ser usado con otros tipos de datos que no sean necesariamente `Texto`, ya que la instrucción `Escribir` se encarga de convertirlos a texto por nosotros.

![prueba-escribir-varios](../img/prueba-escribir-varios.gif)

## Algunos ejemplos más

**Problema:** Implementar un algoritmo en PSeInt que lea dos números por teclado y escriba en pantalla la suma de dichos números

**Código en Pseint**:

```plain
Algoritmo Sumar
  Definir numero1 Como Numerico;
  Definir numero2 Como Numerico;
  Definir suma Como Numerico;
  Escribir "Ingrese el primer número: ";
  Leer numero1;
  Escribir "Ingrese el segundo número: ";
  Leer numero2;
  suma <- numero1 + numero2;
  Escribir "La suma es ", suma;
FinAlgoritmo
```

**Problema:** Crear un código que pida al usuario su nombre, su apellido y su edad y muestre por pantalla los tres datos.

**Código en Pseint**:

```plain
Algoritmo PedirDatos
  Definir nombre Como Texto;
  Definir apellido Como Texto;
  Definir edad Como Numerico;
  Escribir "Ingrese su nombre: ";
  Leer nombre;
  Escribir "Ingrese su apellido: ";
  Leer apellido;
  Escribir "Ingrese su edad: ";
  Leer edad;
  Escribir "Usted se llama ", nombre, " ", apellido, " y tiene ", edad, " años";
FinAlgoritmo
```

**Problema:** Diseñar un pseudocódigo para promediar dos notas de exámenes para luego imprimir dicho promedio.

**Código en Pseint**:

```plain
Algoritmo PromediarDosNotas
  Definir nota1 Como Numerico;
  Definir nota2 Como Numerico;
  Definir promedio Como Numerico;
  Escribir "Ingrese primera nota: ";
  Leer nota1;
  Escribir "Ingrese segunda nota: ";
  Leer nota2;
  promedio <- (nota1 + nota2) / 2;
  Escribir "El promedio de notas es: ", promedio;
FinAlgoritmo
```
