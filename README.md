
## Getting started

Comenzamos instalando las dependencias del proyecto
se requiere **Node 16** para comenzar

```
npm i

```

### Configure Prisma

Generear un archivo _*.env*_ tal y como figura en el env.example, configurar la base de datos

``` 
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"

```

una ves condigurada la base debes ejecutar el siguiente comando, para obtener
los nuevos cambios de la Base de Datos


```
npx prisma db pull

```

Luego el siguiente  comando nos genera los modelos en la carpeta prisma
y el cliente, ademas un grafico en la carpeta **/prisma** que contiene el modelo relacional
en .svg 

```
npx prisma generate

```

finalmente ejecutar el siguiente comando para correr el proyecto en modo dev

```
npm run dev

```





