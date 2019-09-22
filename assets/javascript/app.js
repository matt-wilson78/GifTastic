var movieArray = ["The Shining", "Event Horizon", "Friday the 13th", "A Nightmare on Elm Street", "The Exorcist", "Scream", "Phantasm", "Alien", "Psycho", "In the Mouth of Madness"];
var apiKey = "H2oc3aYnJi6baDdGeWxCAJ13aSY3fegb";

function renderButtons() {
    $("#buttonArea").empty();

    for (var i = 0; i < movieArray.length; i++) {
        console.log(movieArray[i]);
        var movieButton = $("<button type='button' class='m-1 movieButtonPress'>");
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
        console.log(gifObject);
        var results = gifObject.data;
        
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifPush = $("<img>");
            gifPush.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(gifPush);
            $("gifArea").append(gifDiv);
            
        }
    })
}

$(document).on("click", ".movieButtonPress", giphySearch);

renderButtons(movieArray);




