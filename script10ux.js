function checkAnswer(nextPage) {
    var userAnswer = document.getElementById("reponse").value.toLowerCase().trim();
    var messageElement = document.getElementById("message"); // Ajout d'un élément pour afficher le message

    // Normalisez la réponse en retirant les articles et en convertissant en minuscules
    var normalizedAnswer = userAnswer.replace(/^(un |une |le |la |les |)\b/, '').toLowerCase();

    // Vérifiez la réponse en fonction de la logique souhaitée
    if (normalizedAnswer === "0.5") {
        alert("Félicitations ! Vous avez trouvé la bonne réponse !");
        window.location.href = nextPage;
    } else {
        // Afficher le message d'erreur en rouge
        messageElement.style.color = "red";
        messageElement.textContent = "Mauvaise réponse. Essayez à nouveau .!";

        // Vous pouvez également ajouter une logique pour effacer le message après un certain temps si vous le souhaitez
        setTimeout(function () {
            messageElement.textContent = "";
        }, 3000); // Efface le message après 3 secondes (ajustez selon vos besoins)
    }

    if (normalizedAnswer === "0,5") {
        alert("Félicitations ! Vous avez trouvé la bonne réponse !");
        window.location.href = nextPage;
    } else {
        // Afficher le message d'erreur en rouge
        messageElement.style.color = "red";
        messageElement.textContent = "Mauvaise réponse. Essayez à nouveau .!";

        // Vous pouvez également ajouter une logique pour effacer le message après un certain temps si vous le souhaitez
        setTimeout(function () {
            messageElement.textContent = "";
        }, 3000); // Efface le message après 3 secondes (ajustez selon vos besoins)
    }
}
