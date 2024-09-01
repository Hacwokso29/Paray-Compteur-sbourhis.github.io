// Définir la date de l'événement (par exemple, 31 décembre 2024 à minuit)
var eventDate = new Date("Aug 5, 2025 16:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = eventDate - now;

    // Calculer les jours, heures, minutes et secondes restants
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Afficher le résultat dans les éléments HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si le compte à rebours est terminé, afficher un message
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "L'événement a commencé !";
    }
}, 1000);
