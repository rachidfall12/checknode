const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
    // Configuration de l'en-tête de réponse avec le type de contenu HTML
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Envoi de la réponse
    res.end('<h1>Hello Node!!!!</h1>\n');
});

// Écoute du serveur sur le port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
