 3.4. Practica | Mi primer servidor

***

	Repositorio de la practica 3.4 de la materia:
		  Desarrollo Basado en Plataformas


***

La practica consiste en crear un servidor en node.js en las siguientes etapas:

	1) Hola mundo básico.

	2) Servidor simple de hola mundo en node.js usando HTTP.

	3) Servidor síncrono que lea y envíe un archivo.

	4) Servidor asíncrono que lea y envíe un archivo.

	5) Servidor asíncrono que lea y envíe un archivo según su extensión.

	6) Agregar archivo README.md.

	7) Crear Dockerfile e implementar.

***

 Prerequisitos

***

Para ejecutar los programas debe de contar con alguna versión de Node.js

A continuación se describen los pasos para descargar e instalar Node.js

 Instalando

Para descargar e instalar Node.js se utiliza el comando:

	apt-get install nodejs

Para actualizar Node.js, se utiliza el comando:

	apt-get upgrate


 Corriendo pruebas

***

Para ejecutar el servidor se usa el comando:

	node app.js

Mientras el servidor se queda ejecutandose en la terminal, procedemos a abrir cualquier navegador
instalado y se escribe la dirección:

	localhost:4444

donde se mostrara el mensaje del archivo file.txt

Para mostrar el mensaje del archivo file2.txt tenemos que escribir la dirección:

	localhost:4444/file2.txt


 Construido con

***

	Atom - Editor de texto
	Node.js - Entorno para ejecutar JavaScript


 Contribuciones

***

	Luis Antonio Ramírez Martínez, profesor de la Universidad Autónoma de Chihuahua
	 que imparte la materia de Desarrollo Basado en Plataformas


 Autores

***

	 Norma Angélica García Martínez
		329528
