+++
date = '2025-08-10T23:38:02-03:00'
draft = false
title = 'Programa'
+++

<style>
th, td {
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

<table border="1">
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

<table border="1">
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

## Ejercitación

Indicar cuales de los siguientes nombres de variables son **válidos** y **significativos**:

<table border="1">
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
