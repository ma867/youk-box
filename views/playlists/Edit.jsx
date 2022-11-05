const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
    render() {
        const { title, description, songs, _id, username,artwork } = this.props.playlist
        const librarySongs = this.props.songs
        let ids = []
        return (
            <>
                <Default title="edit paige" bannerTitleLight="Edit " bannerTitleSolid="Playlist" endpoint="playlists" btnName="playlist" user={username}>
                    <div className="container mt-3 mb-3">
                        <div className="row justify-content-md-center">
                            <div className="card col-md-8 justify-content-md-center p-3 border-0 rounded-0 p-3 rounded-0">
                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="card-block">
                                            <h5 className="card-title fw-bold mt-3">Playlist Details</h5>
                                            <form action={`/playlists/${_id}?overrideMethod=PUT`} method='POST'>
                                                Title: <input className="line mb-3" type="text" name="title" defaultValue={title} /><br />
                                                Description: <input className="line mb-3" type="text" name="description" defaultValue={description} /><br />
                                                Playlist Cover: <input className="line mb-3" type="text" name="artwork" defaultValue={artwork} /><br />

                                                Songs: <br />


                                                {
                                                    songs.map((song) => {
                                                        const { _id } = song
                                                        const id = _id.toString()
                                                        ids.push(id)

                                                    })

                                                }

                                                {
                                                    librarySongs.map((l_song) => {
                                                        const { title, artist, album, artwork, _id } = l_song

                                                        const id = _id.toString()

                                                        if (ids.includes(id)) {
                                                            return (

                                                                <div className='container'>
                                                                    <div className='row'>
                                                                        <div className='col-1'>
                                                                            <input type="checkbox" id="songs[]" name="songs[]" value={`${id}`} defaultChecked /><br />
                                                                        </div>
                                                                        <div className='col-2'>
                                                                            <img src={artwork} style={{ width: '60px', height: '60px' }} alt="" />
                                                                        </div>
                                                                        <div className='col-9'>
                                                                            <b>{title}</b><br />
                                                                            {artist}<br /><br />
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            )
                                                        }
                                                        else {
                                                            return (

                                                                <div className='container'>
                                                                    <div className='row'>
                                                                        <div className='col-1'>
                                                                            <input type="checkbox" id="songs[]" name="songs[]" value={`${id}`} />
                                                                        </div>
                                                                        <div className='col-2'>
                                                                            <img src={artwork} style={{ width: '60px', height: '60px' }} alt="" />
                                                                        </div>
                                                                        <div className='col-9'>
                                                                            <b>{title}</b><br />
                                                                            {artist}<br /><br />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                                <input className="action" type="submit" value="Submit Playlist" />
                                            </form>
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

module.exports = Edit