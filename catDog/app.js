$(function() {

    var images = [];

    function pushImages() {
        var counter = 0;
        var file;
        while (counter <= 24) {
            file = "images/IMG_" + counter + ".jpg";
            images.push(file);
            counter++;
        };
    };

    function randomizer() {
        var randomIndex1 = Math.floor(Math.random() * 25);
        var randomIndex2 = Math.floor(Math.random() * 25);
        if (randomIndex1 == randomIndex2) {
            randomIndex1 = Math.floor(Math.random() * 25);
        }
        img1 = images[randomIndex1];
        img2 = images[randomIndex2];

        $('#leftPic').html('<img src="' + img1 + '">');
        $('#rightPic').html('<img src="' + img2 + '">');
    };

    $('#reset').on('click', function() {
        randomizer();
    });

    pushImages();
    randomizer();


});
