const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component{
    render(){
        const {title, description, songs, username} = this.props.playlist

        
      
        return(
            <>  

            <Default title="show page" bannerTitleLight="Your" bannerTitleSolid="Playlists" endpoint="playlists" btnName="playlist" user={username}>
                <div className="container mt-3 mb-3">
                    <div className="row justify-content-md-center">
                        <div className="card col-lg-6 p-3 border-0 rounded-0">
                            <div className="row ">
                                {/* <div className="col-md-4">
                                    <img style={{width:"200px",innerHeight:"200px"}} src={artwork}/>
                                </div> */}
                                <div className="col-md-8">
                                    <div className="card-block">
                                        <h1 className="card-title fw-bold mt-3">{title}</h1>
                                        <h2 className="card-text"><span className="fw-bold">Description: </span>{description}</h2>
                                        <h2 className="card-text  fw-bold">Songs:</h2>
                                        <ul>
                                            {
                                                songs.map((song) => {
                                                    const {title, artist, album, artwork, _id} = song
                                                    return(
                                                        <li>
                                                        {title} by {artist} from the album "{album}"
                                                        </li>
                                                    )
                                                })

                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
            {/* {title} by {author} <br />
            description: {description}. <br />
            Songs:
            {
                songs.map((song) => {
                    const {title, artist, album, artwork, _id} = song
                    return(
                        <li>
                          {title} by {artist} from the album "{album}"
                        </li>
                    )
                })

            } */}
            </>
        )
    }
}

module.exports = Show