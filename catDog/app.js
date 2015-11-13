$(function() {

    var images = [];

    function pushImages() {
        var counter = 0;
        var file;
        while (counter < 25) {
            file = "images/IMG_" + counter + ".jpg";
            images.push(file);
            counter++;
        };
    };

    pushImages();

    var randomIndex1 = Math.floor(Math.random() * 26);
    var randomIndex2 = Math.floor(Math.random() * 26);
    if (randomIndex1 == randomIndex2) {
        randomIndex1 = Math.floor(Math.random() * 26);
    }
    img1 = images[randomIndex1];
    img2 = images[randomIndex2];
    console.log(img1, img2);

    $('#leftPic').html('<img src="' + img1 + '">');
    $('#rightPic').html('<img src="' + img2 + '">');


});
