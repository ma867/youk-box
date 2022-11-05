const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component{
    render(){
        const {title, artist, album, artwork,_id, username, audio } = this.props.song
        return(
            <>  

            <Default title="show page" bannerTitleLight="Your" bannerTitleSolid="Songs" endpoint="songs" btnName="song" user={username}>
                <div className="container mt-3 mb-3">
                    <div className="row justify-content-md-center">
                                          
                        <div className="card col-lg-6 p-3 border-0 rounded-0">
                            <div className="row ">
                                {/* <div className="col-md-4">
                                    <img style={{width:"200px",innerHeight:"200px"}} src={artwork}/>
                                </div>
                                 */}

                                <div className="album-wrapper col-md-4">
                                        <img className="card-img-top rounded-0" src={artwork} alt="Card image" style={{width:"200px",innerHeight:"200px"}}/>
                                        <div className="audio-wrapper">
                                            <audio src={audio} controls></audio>
                                        </div>
                                    </div>
                                <div className="col-md-8">
                                    <div className="card-block">
                                        <h1 className="card-title fw-bold mt-3">{title}</h1>
                                        <h2 className = "card-text  fw-bold">{album}</h2>
                                        <h2 className="card-text"><span className="fw-bold">Artist: </span>{artist}</h2>
                                        <form method='POST' action={`/songs/${_id}?overrideMethod=DELETE`}>
                                            <input className="action text-center mb-1" type="submit" value="delete" />
                                        </form>
                                        <form method='GET' action={`/songs/${_id}/edit`}>
                                            <input className="action text-center"  type="submit" value="edit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
            {/* {title} by {artist} from  the album {album}. Artwork: {artwork} was created */}
            </>
        )
    }
}

module.exports = Show