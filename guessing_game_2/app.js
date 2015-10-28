(function () {

    var playing = true;
    var points = 0;

    while (playing) {
        var question1 = prompt("Do I have siblings?");
        // if (typeof question1 == "number") {
        //     alert("Your answer must be a string!");
        // }
        question1 = question1.toLowerCase();
        if (question1 === 'yes' || question1 === 'y') {
            alert('Correct!');
            points++;
        } else {
            alert('Incorrect');
        };
        var question2 = prompt("Am I from Seattle?");
        question2 = question2.toLowerCase();
        if (question2 === 'no' || question2 === 'n') {
            alert('Correct!');
            points++;
        } else {
            alert('Incorrect');
        };
        var question3 = prompt("Is the Big Lebowski the greatest film ever made?");
        question3 = question3.toLowerCase();
        if (question3 === 'yes' || question3 === 'y') {
            alert('Correct!');
            points++;
        } else {
            alert('Sorry, your opinion is wrong.');
        };
        alert('You scored ' + points + ' out of 3');
        break;
    };
})();
