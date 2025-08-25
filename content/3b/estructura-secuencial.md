+++
title = 'Estructura Secuencial'
date = '2025-08-25T12:06:04-03:00'
draft = false
+++

<style>
p:has(img:only-child) {
  text-align: center;
}
</style>

## Estructura Secuencial

### Geométricos

1. Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de los catetos.
2. Elabore un algoritmo que calcule el área de un rectángulo.
3. Realice un algoritmo para calcular el perímetro y área de un Rectángulo un Cuadrado.
4. Elabore un algoritmo que calcule el área de un circulo.
5. Escribir un algoritmo que calcule la longitud y el área de una circunferencia:
   - Longitud de la circunferencia = `2 × PI × radio`
   - Área de la circunferencia = `PI × radio`<sup>`2`</sup>
6. Confeccione un algoritmo para calcular el volumen de un cilindro circular recto.<br>`VC = PI × r ^ 2 × h`

![Cilindro circular recto](../img/cilindro-circular-recto.png)

### Lógicos

1. Escribir un algoritmo que reciba dos variables enteras e intercambie sus valores. Se deben mostrar los valores que tienen finalmente las variables.
2. Elaborar un algoritmo que solicite un número de 2 cifras y que muestre el número de unidades y decenas que lo componen.
3. Desarrollar un algoritmo que permita invertir un número de 3 cifras. Por ejemplo, invertir a `492` da como resultado `294`.
4. Para un número `N` de 5 cifras y un valor `K` entre 2 y 5, reemplazar en `N` el dígito `K` por 0.
   - Ejemplo 1: Para `N = 32415` y `K = 3`, se debe obtener `32015`.
   - Ejemplo 2: Para `N = 32415` y `K = 5`, se debe obtener `32410`.

### Operaciones

1. Diseñar un algoritmo que lea un entero, duplicarlo y visualizar el resultado.
2. Elabore un algoritmo que pide al usuario un número y de este muestre: el sucesor, el antecesor, el cuadrado y la raíz cuadrada.
3. Realice un algoritmo donde pida al usuario dos números y muestre su: suma, resta, multiplicación y división.
4. Escribir un algoritmo que pida dos números enteros y muestre el cociente y el resto de la división entera entre ambos.
5. Diseñar un algoritmo que permita leer cuatro números, calcule el promedio de los cuatro y muestre el resultado.

### Combinados

1. **Precio del estacionamiento (conversión y por cada):** Realice un algoritmo para calcular lo que debe pagar un cliente en un estacionamiento, sabiendo que se paga `$85` la hora. Se debe conocer el tiempo de estacionamiento en horas y minutos.
2. **Backup en CDs (conversión y por cada):** Elaborar un algoritmo que permita calcular el número de CDs necesarios para hacer una copia de seguridad, de la información almacenada en un disco cuya capacidad se conoce. Nota: un CD tiene `700 MB`. Un `GB = 1024 MB`.
3. **Velocidad del proyectil (conversión y formulación):** Escribir un algoritmo que calcule la velocidad de un proyectil que recorre `E` kilómetros en `T` minutos. `Velocidad = espacio / tiempo`. Expresar el resultado en `m/s`.
4. **Sueldo empleado (por cada y porcentajes):** Diseñar un algoritmo para calcular el sueldo de un empleado ingresando las horas trabajadas y el valor de la hora. Con estos datos se calculará el sueldo básico, luego el descuento ingresado por teclado, y finalmente el sueldo neto.
5. **Sueldo de obrero (porcentaje a cantidad y por cada):** Realice un algoritmo para calcular el nuevo salario de un obrero si obtuvo un incremento del `25%` sobre su salario anterior, y teniendo en cuenta la cantidad de horas extras trabajadas (valor de la hora extra `$55`).

### Conversiones

1. **Moneda:** Realice un algoritmo para convertir una determinada suma de dinero de euros a pesos.
2. **Tiempo:** Realice un algoritmo para calcular la edad de una persona teniendo los años, meses y días.
3. **Longitud 1:** Diseñar un algoritmo que convierta centímetros en pulgadas (1 pulgada = 2,54 cm).
4. **Masa:** Realice un algoritmo para calcular el peso de una persona en gramos, libras y toneladas.
   - Gramos = kilos × 1000
   - Libras = kilos × 2,205
   - Toneladas = kilos / 1000
5. **Grados:** Elaborar un algoritmo que dados los grados Celsius los convierta a Fahrenheit, con la fórmula:
   `F = (C * 1.8) + 32`
6. **Longitud 2:** Confeccionar un programa que convierta una medida en pies a yardas, pulgadas, centímetros y metros.
   - `1 pie = 12 pulgadas`.
   - `1 yarda = 3 pies`.
   - `1 pulgada = 2,54 cm`.

### Por cada

1. **Precio por peso:** Realice un algoritmo que permita ingresar el precio de un producto y su precio por kilo, y calcule su valor en pesos.
2. **Puntajes por respuestas:** Elaborar un algoritmo que solicite el número de respuestas correctas, incorrectas y en blanco de un concurso. El puntaje se calcula:
   - Correcta = +4
   - Incorrecta = -1
   - En blanco = 0
3. **Puntajes por partidos:** Elaborar un algoritmo que permita ingresar partidos ganados, perdidos y empatados de un equipo y muestre su puntaje.
   - Ganado = 3 puntos
   - Empatado = 1 punto
   - Perdido = 0 puntos
4. **Cambios en un torneo:** En un torneo de Fútbol 5 con `N` equipos y `F` fechas, cada equipo puede hacer como máximo 3 cambios por partido. Se desea calcular la cantidad máxima de cambios que pueden haber ocurrido hasta el momento.
5. **Kiosko de Tito:** Tito solo tiene billetes de `$10` y caramelos de `$1`. Dada una cantidad `P`, indicar cuántos caramelos debe dar de vuelto.
   - Ejemplo 1: Entrada 11 → salida 1.
   - Ejemplo 2: Entrada 55 → salida 5.

### Porcentajes

1. **Precio del producto (porcentaje a cantidad):** Obtener el precio de venta de un artículo para ganar `30%`.
2. **Productos con IVA (porcentaje a cantidad):** Calcular el IVA de dos productos y luego el monto total en pesos.
3. **Descuento de compra 1:** Calcular el descuento en pesos de una compra con 20% de descuento.
4. **Descuento de compra 2:** Calcular el monto total a pagar de 3 productos (nombre, precio y cantidad). Se aplica un `5%` de descuento.
5. **Sueldo de vendedor:** Calcular sueldo total de un vendedor con sueldo base + `10%` de comisión de 3 ventas.
6. **Presupuesto para hospital:** Repartir el presupuesto en 3 áreas:
   - Ginecología `40%`
   - Traumatología `30%`
   - Pediatría `30%`
7. **Hombres y mujeres (cantidad a porcentaje):** Calcular porcentaje de hombres y mujeres en un grupo.
8. **Descontado de compra (cantidad a porcentaje):** Calcular porcentaje descontado de una compra, con precio tarifa y precio pagado.
9. **Inversión a la empresa (cantidad a porcentaje):** Tres personas invierten distinto capital en una empresa. Calcular el porcentaje que aporta cada una respecto al total.

### Promedio

1. Todos los lunes, miércoles y viernes, una persona corre la misma ruta y cronometra los tiempos obtenidos. Determinar el tiempo promedio que la persona tarda en recorrer la ruta en una semana cualquiera.
