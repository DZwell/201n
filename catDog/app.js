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

    randomIndex1 = Math.floor(Math.random() * 26);
    randomIndex2 = Math.floor(Math.random() * 26);
    img1 = images[randomIndex1];
    img2 = images[randomIndex2];
    console.log(img1, img2);

    $('#leftPic').html('<img src="' + img1 + '">');
    $('#rightPic').html('<img src="' + img2 + '">');


});
