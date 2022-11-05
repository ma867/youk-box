# You-Kbox: Your Personal Jukebox

### Live Heroku App
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
* NodeJS & Express
* Heroku
* Spotify Web API
* Postman

### Design Approach
* **Ideation/Brainstorm:** The first step after deciding on my theme. Given my love for music, I figure I would create my own version, that would mimick the same user-flow: users can add songs, create playlists, and search music.
* **Defining the Models:** With a clear flow, I defined 3 models: user, song, and playlist. For each model, I defined the keys used and the data type (see ERD diagram below).

    ![ERD](https://i.imgur.com/6aKRytK.png)
 
* **Low-Fidelity Prototype:** With the barebones all set, I proceeded to create a wireframe of the UI for the JSX views. For the sake of consistency, The same UI was used for both the /songs and /playlists routes. Belows are the images:
![wireframes](https://i.imgur.com/NegCpjG.png)
![wireframes](https://i.imgur.com/3ndvt0a.png)
![wireframes](https://i.imgur.com/FZuxZOB.png)

* **Development:** For the coding process, I divided my work into small technical tasks as you would in an agile system. First, dependencies and boiler plate code was written to ensure that express and any of the modules installed ran properly. Then, I focused on creating all the INDUCES routes and their respective JSX views for the songs route. Using that same format, applied the same changes to the playlists route. Lastly, I began implementing the  code for manipulating the DOM as well as adding CSS styling to make it more user friendly. This was an iterative step.






### INDUCES Tables
|Action| URL| HTTP Verb | JSX View Filename | mongoose method |
| ----------- | -------------| --------------| -------------| --------------|
| Index| /songs, /playlists | GET | Index.jsx | Song.find({}), Playlist.find({}) |
| Show| /songs/:id, /playlists/:id | GET | Show.jsx | Song.findById(req.params.id), Playlist.findById(req.params.id)|
| New | /songs/new, /playlists/new | GET | New.jsx | none |
| Create | /songs, /playlists | POST | none | Song.create(req.body), Playlist.create(req.body)|
| Edit | /songs/:id/edit, /playlists/:id/edit | GET | Edit.jsx | Song.findById(req.params.id), Playlist.findById(req.params.id) | 
| Update| /songs/:id, /playlists/:id | PUT | none | Song.findByIdAndUpdate(req.params.id), Playlist.findByIdAndUpdate(req.params.id) |
| Destroy| /songs/:id, /playlists/:id  | DELETE | none | Song.findByIdAndDelete(req.params.id), Playlist.findByIdAndDelete(req.params.id) |