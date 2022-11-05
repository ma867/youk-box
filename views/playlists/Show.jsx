const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
    render() {
        const { title, description, songs, username, artwork } = this.props.playlist



        return (
            <>

                <Default title="show page" bannerTitleLight="Your" bannerTitleSolid="Playlists" endpoint="playlists" btnName="playlist" user={username}>
                    <div className="container mt-3 mb-3">




                        <div className="row justify-content-md-center">
                            <div className="card col-md-12 p-3 border-0 rounded-0">
                                <div className="row ">
                                    <div className="col-md-4">
                                        <img className="w-100" src={artwork} style={{ width: '40px', height: '400px' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-block">
                                            <h1 className="card-title fw-bold mt-3">{title}</h1>
                                            <h2 className="card-text">{description}</h2><br />
                                            <ul>
                                                {
                                                    songs.map((song) => {
                                                        const { title, artist, album, artwork, _id } = song
                                                        return (


                                                            <div className='container'>
                                                                <div className='row'>
                                                                    <div className='col-2'>
                                                                        <img src={artwork} style={{ width: '60px', height: '60px' }} alt="" />
                                                                    </div>
                                                                    <div className='col-10'>
                                                                        <b>{title}</b><br />
                                                                        {artist}<br /><br />
                                                                    </div>
                                                                </div>
                                                            </div>

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
            </>
        )
    }
}

module.exports = Show