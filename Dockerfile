# Usa un'immagine leggera ufficiale di Node.js
FROM node:20-alpine

# Imposta la cartella di lavoro dentro il container
WORKDIR /app

# Copia TUTTI i file del progetto dentro il container
COPY . .

# Installa tutte le dipendenze definite in package.json
RUN npm install

# Espone la porta su cui l'app ascolta
EXPOSE 3000

# Comando di avvio del server Node.js
CMD ["npm", "start"]
