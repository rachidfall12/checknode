const fs = require('fs');

// Contenu du fichier à écrire
const content = 'Hello Node';

// Écriture dans le fichier "welcome.txt"
fs.writeFile('welcome.txt', content, (err) => {
    if (err) throw err;
    console.log('Le fichier welcome.txt a été créé avec succès.');
});
