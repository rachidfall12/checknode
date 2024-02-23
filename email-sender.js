// Importer le module Nodemailer
const nodemailer = require('nodemailer');

// Configuration du transporteur SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'votre_email@gmail.com', 
        pass: 'votre_mot_de_passe' 
    }
});

// Définir les options du mail
let mailOptions = {
    from: 'votre_email@gmail.com', 
    to: 'destinataire@example.com', 
    subject: 'Test d\'envoi d\'e-mail avec Nodemailer',
    text: 'Ceci est un test d\'envoi d\'e-mail avec Nodemailer!'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
    } else {
        console.log('E-mail envoyé avec succès:', info.response);
    }
});
