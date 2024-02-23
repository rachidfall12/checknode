const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
    // Configuration des options pour le mot de passe
    const passwordOptions = {
        length: 12, // Longueur du mot de passe
        numbers: true, // Autoriser les chiffres
        symbols: true, // Autoriser les symboles
        uppercase: true, // Autoriser les lettres majuscules
        excludeSimilarCharacters: true, // Exclure les caractères similaires (ex: 1 et l, 0 et O, etc.)
    };

    // Génération du mot de passe
    const password = generatePassword.generate(passwordOptions);
    
    return password;
}

// Générer et afficher un mot de passe aléatoire
const randomPassword = generateRandomPassword();
console.log('Mot de passe généré:', randomPassword);
