var movieArray = ["The Shining", "Event Horizon", "Friday the 13th", "A Nightmare on Elm Street", "The Exorcist", "Scream", "Phantasm", "Alien", "Psycho", "In the Mouth of Madness"];

function renderButtons() {
    for (let i = 0; i < movieArray.length; i++) {
        console.log(movieArray[i]);
        var movieButton = $("<button class='btn btn-primary border rounded m-2 movieButtonPress'></button>");
        movieButton.text(movieArray[i]);
        $("#buttonArea").append(movieButton);

    }
};

$("#submitMovie").on("click", function (event) {
    event.preventDefault();
    var newMovie = $("#movieInput").val().trim();
    movieArray.push(newMovie);
    console.log(movieArray);
    var lastAdded = movieArray[movieArray.length - 1];
    var movieButton = $("<button class='btn btn-primary border rounded m-2 movieButtonPress'></button>");
    movieButton.text(lastAdded);
    $("#buttonArea").append(movieButton);

})

renderButtons(movieArray);