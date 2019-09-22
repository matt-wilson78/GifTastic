var movieArray = ["The Shining", "Event Horizon", "Friday the 13th", "A Nightmare on Elm Street", "The Exorcist", "Scream", "Phantasm", "Alien", "Psycho", "In the Mouth of Madness"];
var apiKey = "H2oc3aYnJi6baDdGeWxCAJ13aSY3fegb";

function renderButtons() {
    $("#buttonArea").empty();

    for (var i = 0; i < movieArray.length; i++) {
        console.log(movieArray[i]);
        var movieButton = $("<button type='button' class='m-1 p-1 movieButtonPress'>");
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
    $(movieInput).val("");

})

function giphySearch() {

    var movieToGif = $(this).attr("data-choice");
    console.log(movieToGif);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=H2oc3aYnJi6baDdGeWxCAJ13aSY3fegb&&limit=10&offset=0&rating=PG&lang=en&q=" + movieToGif;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(gifObject) {
        var results = gifObject.data;
        console.log(results);
        
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='float-left m-1'>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifPush = $("<img>");
            gifPush.attr("src", results[i].images.fixed_height_still.url);
            gifPush.attr("data-state", "still");
            gifPush.attr("data-still", results[i].images.fixed_height_still.url);
            gifPush.attr("data-animate", results[i].images.fixed_height.url);
            gifPush.addClass("gifButton");
            gifDiv.append(p);
            gifDiv.append(gifPush);
            $("#gifArea").prepend(gifDiv);
            
        }
    })
}

$(document).on("click", ".movieButtonPress", giphySearch);

$(document).on("click", ".gifButton", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})

renderButtons(movieArray);




