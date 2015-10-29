(function () {

    var playing = true;
    var points = 0;
    var question1 = "Is the Big Lebowski the greatest film ever made?";
    var question2 = "Are dogs better than cats?"
    var question3 = "Yes or no?";


    function startGame(question, answer) {
        var guess = prompt(question);
        guess = guess.toLowerCase();

        if (answer == 'yes') {
            if (guess == 'yes' || guess == 'y') {
                var el = document.getElementById('response');
                var elText = document.createTextNode('Correct!');
                el.appendChild(elText);
            } else if (guess == 'no' || guess == 'n') {
                var el = document.getElementById('response');
                var elText = document.createTextNode('Sorry, your opinion is wrong.');
                el.appendChild(elText);
            }

        } else if (answer == 'no') {
            if (guess =='no' || guess == 'n') {
                var el = document.getElementById('response');
                var elText = document.createTextNode('Correct!');
                el.appendChild(elText);
            } else if(guess == 'yes' || guess == 'y') {
                var el = document.getElementById('response');
                var elText = document.createTextNode('Sorry, your opinion is wrong.');
                el.appendChild(elText);
            }
        };
    };

startGame(question1, 'yes');
startGame(question2, 'no');
startGame(question3, 'yes');

})();
