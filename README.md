# Toolbox test

Este es el test para toolbox. Se divide en dos secciones, las dos secciones pueden correr con docker como demostración.

### Contenido:
* Backend 
* Frontend

### Requerimientos:
* docker
* docker-compose

### Levantar el proyecto:
Unicamente se necesita tener docker-compose instalado y docker se encarga de instalar las dependencias de ambos proyecto 
y levantar los servidores de cada uno.

```
docker-compose up
```

## Backend:

### Correr
```
docker-compose up backend
```

### Test
```
npm install
npm run test
```


## Frontend:

### Correr
```
docker-compose up client
```

### Dev
```
npm install
npm start
```
