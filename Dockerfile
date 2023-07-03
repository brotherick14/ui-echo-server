# Usar una imagen base con Node.js 16.4.2 preinstalado
FROM node:16.4.2

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package.json package-lock.json /app/

# Instalar las dependencias del proyecto
RUN npm ci --ignore-scripts

# Copiar el resto de los archivos del proyecto al contenedor
COPY . /app

# Construir la aplicación de React
RUN npm run build

# Exponer el puerto en el que la aplicación de React se ejecuta (generalmente el puerto 3000)
EXPOSE 4000

# Comando para iniciar la aplicación de React cuando el contenedor se ejecute
CMD ["npm", "start"]
