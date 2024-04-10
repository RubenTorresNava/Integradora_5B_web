Para hacer funcioanr el sistema, es importante hacer la instalación de las dependencias necesarias para el correcto funcionamiento del sistema. Para ello, se debe ejecutar el backend y el frontend en diferentes terminales de la siguiente manera:

--Para ejecutar el backend teclee el siguente comando en su terminal:

-nodemon src/index.js

--Para ejecutar el frontend tiene que dirigirce a la carpeta de AppWeb y teclear el sigueitne comando:

-npm start

Ademas, hay dependencias que, en caso de que el sistema no funcione correctamente, se deben instalar de manera manual. Para ello, se debe ejecutar el siguiente comando en la terminal:
    -npm i react-router-dom
    -npm install -s node-sass
    -npm install bootstrap@5.3.3
    -npm install react-icons --save
    -npm install reactstrap react react-dom
    -npm install --save bootstrap
    -npm install react-bootstrap bootstrap
    -npm install sweetalert2

En caso de que el sistema no funcione, se tiene que hacer la eliminacion de la carpeta node_modules y el archivo package-lock.json, para luego ejecutar el comando npm install nuevamente. De forma que las dependencias se instalen de manera correcta.

