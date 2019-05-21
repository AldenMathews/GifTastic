$(document).ready(function () {
    var animals = [
        "dog", "cat", "eagle", "parrot", "shark", "bird", "fish", "clownfish", "sugar glider", "tiger", "elephant", "cheetah"
    ];

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        var animalGif = $("<div id="animal-gifs">")
        var animalImage = $("<img>");

        animalImage.attr("src");
        animalImage.attr("rating");

        animalGif.append(animalImage)
    });


});