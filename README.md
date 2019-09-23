# GifTastic

This app populates a list of buttons from an initial array of 10 horror movies. 

There is a section to the right where you can add additional horror movies, that will then be added to the list of buttons at the top of the page

To the left is the area where the gifs will populate.

Gifs are drawn into the page through an ajax call to the giphy api. They will populate based on the button pressed at the top. Upon click, each gif will play or pause, depending on their current state.

When a different button is clicked, the current gifs will be emptied out of the DIV to be replaced by gifs from the most recently pressed button.