1.- Common JS 
2.- database.js
3.- Sequelize CLI - Command Line Interface 

npx sequelize-cli db:create //para crear la db 
npx sequelize-cli init //para las carpetas

https://www.npmjs.com/package/sequelize-cli?activeTab=readme

//npx sequelize-cli model:generate
//npx sequelize-cli db:create //para crear la db
//npx sequelize-cli db:migrate
//npx sequelize-cli db:migrate:undo => revierte la migracion mas reciente, como control z  
//npx sequelize-cli db:migrate:undo:all --to xxx para una migracion especifica 
//npx sequelize-cli init //para las carpetas
/* npx sequelize-cli model:generate --name User --attributes firstname:string,lastname:string,
email:string,avatar:string,password:string,description:string,validEmail:boolean  */

// DBeaver es un cliente para conectarnos a la db
  // para poder ver tu db necesitas conectarte directamente a la misma


  
  
  <!--  -->

// Como conectarte a una db en DBeaver
  // Nueva Conexion (Enchufe)
  // Seleccionar el dialecto de la db y next
  // LLenar los datos de tu db host, puerto, user, password
  // antes de abrirla prueba la conexion e instala si te pide los driver

//npm i bcrypt => para crear users