var movieArray = ["The Shining", "Event Horizon", "Friday the 13th", "A Nightmare on Elm Street", "The Exorcist", "Scream", "Phantasm", "Alien", "Psycho", "In the Mouth of Madness"];
var apiKey = "H2oc3aYnJi6baDdGeWxCAJ13aSY3fegb";

function renderButtons() {
    $("#buttonArea").empty();

    for (var i = 0; i < movieArray.length; i++) {
        console.log(movieArray[i]);
        var movieButton = $("<button class='btn btn-primary border rounded m-2 movieButtonPress'></button>");
        movieButton.text(movieArray[i]);
        movieButton.attr("data-choice", movieArray[i]);
        $("#buttonArea").append(movieButton);

    }
};

$("#submitMovie").on("click", function (event) {
    event.preventDefault();
    var newMovie = $("#movieInput").val().trim();
    movieArray.push(newMovie);
    console.log(movieArray);

    renderButtons(movieArray);

})

var giphySearch = function () {

    var movieToGif = $(this).attr("data-choice");
    console.log(movieToGif);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=H2oc3aYnJi6baDdGeWxCAJ13aSY3fegb&&limit=10&offset=0&rating=PG-13&lang=en&q=" + movieToGif;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#gifArea").append(response);
    })
}

$(document).on("click", ".movieButtonPress", giphySearch);

renderButtons(movieArray);





    // var searchOMDB = function (movie) {
    //     var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         createRow(response);
    //     });
    // };