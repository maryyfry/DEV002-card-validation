# Tarjeta de crédito válida

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumen del proyecto
Pensé primero en hacer el proyecto sobre un bazar de ropa, pero después indague en que situaciones de la vida cotidiana puedo usar una tarjeta de crédito y justo recordé que ya no tenía datos en mi celular, entonces se me ocurrió hacer el proyecto de una aplicación web donde pueda comprar recargas de saldo.

## 3. Investigación UX
Esta aplicación web tiene como objetivos ayudar a todas las personas a que puedan hacer una recarga de saldo de una manera rápida, segura y eficaz. Muchas ocasiones el saldo llega agotarse en momentos inoportunos o donde simplemente no quieres ir a un establecimiento y hacer filas para comprar un paquete de datos. Con esta aplicación web solo ingresando al link puedes comprar el paquete de datos que más se adapte a tus necesidades, desde el más básico y económico hasta el que contenga mas megas para navegar.

## 4. Wireframes
[![315321000-465908255679054-6596285379872426101-n.jpg](https://i.postimg.cc/YSYs5m9R/315321000-465908255679054-6596285379872426101-n.jpg)](https://postimg.cc/065nmj7K)
