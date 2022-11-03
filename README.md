# Welcome to Guess Who? Chris, Cris, or Kris Edition

### Live Heroku 
Check out the application [here!](https://you-kbox.herokuapp.com/#)

### Trello 
Check out the trello board [here](https://trello.com/invite/b/G95vafPm/ATTIf1912e14f601ca200a55643a381218ad3F5BE4E8/playlist-application)

### Project Description
This application is my personal reiteration of streaming platforms like SoundCloud and the now defunct, 8track.



### Technologies\Resources Used:
* JavaScript
* HTML
* CSS
* Bootstrap 4/5
* MongoDB
* NodeJs & Express
* Heroku
* Spotify Web API
* Postman

### Design Approach
* **Ideation/Brainstorm:** The first step after deciding on my theme. Given my love for music, I figure I would create my own version, that would mimick the same user-flow: users can add songs, create playlists, and search music.
* **Defining the Models &:** With a clear flow, I defined 3 models: user, song, and playlist. For each model, I defined the keys used and the data type (see ERD diagram below).

    ![ERD](https://i.imgur.com/6aKRytK.png)
  * **Players:** I decided on two players, and made one of the players the computer.
  * **Character Amount:** I decided on having 24 Chris characters just like the real-life board-game.
  * **Character Attributes:** Because there was a need to control the question input for the player,I decided to provide questions myself. To create the questions, I settled on four attributes: sex (male/female), ethnicity, hair-color, and profession.
  * **Character List:** Based on the attributes, I began researching celebrities that were varied enough.
* The second step involved creating quick wireframes for the look of the board and the flow. After the sketches were done, I proceeded to create the barebones HTML and CSS for the board.
![wireframes](https://i.imgur.com/wBEJLWn.jpg)

* Lastly, I began implementing the JS code for manipulating the DOM as well as adding CSS styling to make it more user friendly. This was an iterative step.
