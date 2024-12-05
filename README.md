# CALCULADORA-React Native
## Álvaro Gracia Aledo

## COMO INICIAR LA APLICACIÓN 

**Primero:** Debemos descargar en nuestro teléfono la aplicación **ExpoGo**
En nuestro teléfono debemos activar las opciones de desarrollador y habilitar la **Depuración Inalambrica**, despues nos mostrara nuestra Ip y un codigo.
Con esa ip nos vamos a la terminal de nuestro equipo y escribimos "**adb pair nuestraIP**" y despues nos pedira el codigo y una vez hecho eso ya tenemos el telefono vinculado con el ordenador.
¡¡¡**Importante** El ordenador y el movil deben estar conectados al mismo Wifi !!!

**Segundo:** Abrimos Visual Studio Code y buscamos la opcion de **Clone Git Repository**, la cual sale en medio de la pantalla nada más abrir la aplicación.
Cuando le demos, arriba nos pedira la URL del proyecto, ahi la introducimos y nos dejara descargarlo.

**Tercero:** Abrimos el proyecto en VSC y abrimos una termina, buscando en las pestañas superiores o con la secuencia de comandos **Ctrl+Mayus+ñ**.
En la terminal debemos verificar que estamos dentro del proyecto.
Ejemplo:
**PS F:\INSTITUTO\DAM_24-25\Desarollo_de_Interfaces\UT2\REACT_NATIVE\calculadora**
Una vez comprobado que estamos en el proyecto solo debemos hacer **npm run start** y solo queda esperar.
Una vez cargado el proyecto nos aparecera un codigo QR, el cual debemos escanear con la aplicación que descargamos anteriormente.

**Y ya esta, ya tenemos la calculadora en nuestro teléfono!!!**

## EJECUCIÓN.

![Foto Ejamplo 1](https://private-user-images.githubusercontent.com/126109887/392961492-fc0e2cc2-9c4c-46f6-8e10-ffc5aaf1830b.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM0MjY1MTgsIm5iZiI6MTczMzQyNjIxOCwicGF0aCI6Ii8xMjYxMDk4ODcvMzkyOTYxNDkyLWZjMGUyY2MyLTljNGMtNDZmNi04ZTEwLWZmYzVhYWYxODMwYi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTIwNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDEyMDVUMTkxNjU4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MmQ2NTA5YmVkYmE3ODQzNzNhOTlhNWQzOWNhY2EzY2NlNGEyZTY4OGZhZmY0MWVhMDM4ZjdiY2JkZDg1OWYwMyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.tUWahMX80sAp4XAoZVvzwFYJjv9X3nLDve_L9H_7dTk =50x50)
![Foto Ejamplo 2](https://private-user-images.githubusercontent.com/126109887/392961497-fe1708be-2c32-4800-afc4-3c43b6cd758d.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM0MjY1MTgsIm5iZiI6MTczMzQyNjIxOCwicGF0aCI6Ii8xMjYxMDk4ODcvMzkyOTYxNDk3LWZlMTcwOGJlLTJjMzItNDgwMC1hZmM0LTNjNDNiNmNkNzU4ZC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTIwNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDEyMDVUMTkxNjU4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDJmY2JkNGZmNmIxNjgzY2I0YTcxNDkxZDMyYjdiYThhOGUwNGU4OGU1YzhhNDJlNGRkOTExNDA4YjIwNmI4MSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.dCyPiZ25D8C-St1SU2QXoKg4tcUPd3MOyoV4LnF8eyE =50x50)
![Foto Ejamplo 3](https://private-user-images.githubusercontent.com/126109887/392961502-3c9a0bbb-14b5-45d1-b76e-3cee8f906096.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM0MjY1MTgsIm5iZiI6MTczMzQyNjIxOCwicGF0aCI6Ii8xMjYxMDk4ODcvMzkyOTYxNTAyLTNjOWEwYmJiLTE0YjUtNDVkMS1iNzZlLTNjZWU4ZjkwNjA5Ni5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTIwNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDEyMDVUMTkxNjU4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YTY1YWYwZjZjMmE1YTQ3MjBkOTM1ODU1OTIxMjgyNjgzM2E4MDc5ZGFkODYzYTU4ZTRiYWEzMmJjNjM5YTYwZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.VU1aUw4Dvszq7WI0wmW30QwOxZtw_pZTOs4uE-6RS7E =50x50)