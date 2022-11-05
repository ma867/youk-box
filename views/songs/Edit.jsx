const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
    render() {
        const { title, artist, album, artwork, _id, username, audio } = this.props.song
        return (
            <Default title="edit paige" bannerTitleLight="Edit " bannerTitleSolid="Song" endpoint="songs" btnName="song" user={username}>
                <div className="container mt-3 mb-3">
                    <div className="row justify-content-md-center">
                        <div className="card col-md-12 p-3 border-0 rounded-0">
                            <div className="row ">
                                <div className="col-md-4">
                                    <img className="w-100" src={artwork} style={{ width: '350px', height: '350px' }} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-block">
                                        <h5 className="card-title fw-bold mt-3">Edit Song</h5>
                                        <form action={`/songs/${_id}?overrideMethod=PUT`} method='POST'>
                                            Title: <input className="line mb-3" type="text" name="title" defaultValue={title} /><br />
                                            Artist: <input className="line mb-3" type="text" name="artist" defaultValue={artist} /><br />
                                            Album: <input className="line mb-3" type="text" name="album" defaultValue={album} /><br />
                                            Album Artwork: <input className="line mb-3" type="text" name="artwork" defaultValue={artwork} /><br />
                                            Audio: <input className="line mb-3" type="text" name="audio" defaultValue={audio} /><br />
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

module.exports = Edit