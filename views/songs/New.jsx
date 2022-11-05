const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component{
    render(){
        return(
            <Default title="Create Song" bannerTitleLight="Add a " bannerTitleSolid="Song" endpoint="songs" btnName="song" user="logout">
                <div className="container mt-3 mb-3">
                    <div className="row">
                        <div className="card col-md-12 p-3 border-0 rounded-0">
                            <div className="row ">
                                <div className="col-md-4">
                                    <img className="w-100" src="https://i.imgur.com/0FUT9eJ.png"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-block">
                                        <h5 className="card-title fw-bold mt-3">Song Details</h5>
                                            <form action="/songs" method='POST'>
                                                Title: <input className="line mb-3" type="text" name="title" placeholder='Song Name Goes Here' /><br />
                                                Artist: <input className="line mb-3" type="text" name="artist" placeholder  ='Artist(s) Name Goes Here'/><br />
                                                Album: <input className="line mb-3" type="text" name="album" placeholder='Album Name Goes Here'/><br />
                                                Album Artwork: <input className="line mb-3" type="text" name="artwork" placeholder='URL for Album Art Goes Here'/><br />
                                                Audio: <input className="line mb-3" type="text" name="audio" placeholder='URL for MP3 Goes Here'/><br />

                                                <input className="action" type="submit" value="Submit Song" />
                                            </form>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
        )

    }
}

module.exports = New