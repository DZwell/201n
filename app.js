function () {

    var playing = true;
    var guesses = 0;
    var maxGuesses = 3;
    var points = 0;

    while (playing && guesses <= maxGuesses) {
        var question1 = prompt("Do I have siblings?")
        question1 = question1.toLowerCase()
        if (question1 === 'yes' || question1 === 'y') {
            alert('Correct!');
            points++;
        } else {
            alert('')
        }

    }



}();
