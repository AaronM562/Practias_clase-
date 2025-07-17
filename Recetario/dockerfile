# Etapa 1: Build
FROM node:18 AS build
WORKDIR /app

# Copiar package.json y package-lock.json (si tienes)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de archivos
COPY . .

# Construir la app para producción
RUN npm run build

# Etapa 2: Servir con nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80 para nginx
EXPOSE 80

# Ejecutar nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
