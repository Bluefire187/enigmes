function checkAnswer(nextPage) {
    var userAnswer = document.getElementById("reponse").value.toLowerCase();

    // Vérifiez la réponse en fonction de la logique souhaitée
    if (userAnswer === "piano") {  // Changez cette condition selon votre réponse
        alert("Félicitations ! Vous avez trouvé la bonne réponse !");
        window.location.href = nextPage;
    } else {
        alert("Mauvaise réponse. Essayez à nouveau !");
    }
}
