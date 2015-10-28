(function () {

    var playing = true;
    var guesses = 0;
    var maxGuesses = 3;
    var points = 0;

    while (playing && guesses <= maxGuesses) {
        var question1 = prompt("Do I have siblings?")
        if (typeof question1 != "string") {
            alert("Your answer must be a string!");
        }
        question1 = question1.toLowerCase()
        if (question1 === 'yes' || question1 === 'y') {
            alert('Correct!');
            points++;
        } else {
            alert('')
        }

    }



)}();
