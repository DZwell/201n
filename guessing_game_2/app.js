(function () {

    var points = 0;
    var question1 = "Is the Big Lebowski the greatest film ever made?";
    var question2 = "Are dogs better than cats?"
    var question3 = "Yes or no?";
    var el = document.getElementById('response');

    function startGame(question, answer) {
        var guess = prompt(question);
        guess = guess.toLowerCase();
        var elText1 = 'Correct!';
        var elText2 = 'Sorry, your opinion is wrong.';

        if (answer == 'yes') {
            if (guess == 'yes' || guess == 'y') {
                el.innerHTML = elText1;
                points++;
            } else if (guess == 'no' || guess == 'n') {
                el.innerHTML = elText2;
            }
        } else if (answer == 'no') {
            if (guess =='no' || guess == 'n') {
                el.innerHTML = elText1;
                points++;
            } else if(guess == 'yes' || guess == 'y') {
                el.innerHTML = elText2;
            }
        };
    };

    function displayPoints() {
        elText3 = 'You got ' + points + ' out of 3';
        el.innerHTML = elText3;
    };

startGame(question1, 'yes');
startGame(question2, 'no');
startGame(question3, 'yes');
displayPoints();

})();
