const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
    render() {
        const { songs } = this.props
        console.log(this.props)
        return (
            <Default title="Songs Index" bannerTitleLight="Song " bannerTitleSolid="Library" endpoint="songs" btnName="song" user="logout">
                <div className="container mt-3 mb-3">
                    <div className="row justify-content-md-center">
                        {
                            songs.map((song) => {
                                const { title, artist, album, artwork, _id, audio } = song
                                return (
                                    <div className="col-sm-3 mb-3">


                                        <div className="card shadow-sm border-0 rounded-0" >

                                            <div className="album-wrapper">
                                                <img className="card-img-top rounded-0" src={artwork} alt="Card image" style={{ width: '100%' }} />
                                                <div className="audio-wrapper">
                                                    <audio src={audio} controls></audio>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <h5 className="card-title fw-bold"><a href={`/songs/${_id}`}>{title}</a></h5>
                                                <p className="card-text">{album}</p>
                                                <p className="card-text"><span className="fw-bold">Artist: </span>{artist}</p>
                                                <form method='POST' action={`/songs/${_id}?overrideMethod=DELETE`}>
                                                    <input className="action text-center mb-1" type="submit" value="delete" />
                                                </form>
                                                <form method='GET' action={`/songs/${_id}/edit`}>
                                                    <input className="action text-center" type="submit" value="edit" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>


            </Default>
        )
    }
}

module.exports = Index