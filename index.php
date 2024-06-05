<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $ville = htmlspecialchars($_POST['ville']);
    $municipalite = htmlspecialchars($_POST['municipalite']);
    $lieu_livraison = htmlspecialchars($_POST['lieu_livraison']);

    // Destinataire de l'email
    $to = "abdelghanihassaim1@gmail.com";

    // Sujet de l'email
    $subject = "Nouvelle commande sur ATLASTOREDZ";

    // Message de l'email
    $message = "
    <html>
    <head>
        <title>Nouvelle commande sur ATLASTOREDZ</title>
    </head>
    <body>
        <h2>Nouvelle commande</h2>
        <p><strong>Nom:</strong> $nom</p>
        <p><strong>Téléphone:</strong> $telephone</p>
        <p><strong>Ville:</strong> $ville</p>
        <p><strong>Municipalité:</strong> $municipalite</p>
        <p><strong>Lieu de livraison:</strong> $lieu_livraison</p>
    </body>
    </html>
    ";

    // Pour envoyer un email HTML, l'en-tête Content-type doit être défini
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // En-têtes supplémentaires
    $headers .= 'From: webmaster@atlastoredz.com' . "\r\n";
    $headers .= 'Reply-To: webmaster@atlastoredz.com' . "\r\n";

    // Envoyer l'email
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre commande a été envoyée avec succès.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de votre commande.";
    }
}
?>