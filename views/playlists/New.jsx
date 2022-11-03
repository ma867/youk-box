const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component{
    render(){
        const {songs} = this.props
        console.log(this.props.songs)
        return(
            <>
     <Default title="edit paige" bannerTitleLight="Edit " bannerTitleSolid="Playlist" endpoint="playlists" btnName="playlist" user="logout">
                <div className="container mt-3 mb-3">
                    <div className="row justify-content-md-center">
                        <div className="card col-md-8 justify-content-md-center p-3 border-0 rounded-0 p-3 rounded-0">
                            <div className="row ">
                              
                                <div className="col-md-12">
                                    <div className="card-block">
                                        <h5 className="card-title fw-bold mt-3">Playlist Details</h5>
                                            <form action="/playlists" method='POST'>
                                                Title: <input className="line mb-3" type="text" name="title" placeholder='Title Goes Here'/><br />
                                                Author: <input className="line mb-3" type="text" name="author" placeholder='Your Awesome Name Goes Here' /><br />
                                                Description: <input className="line mb-3" type="text" name="description" placeholder='Your Vibes for This Playlist Go Here' /><br />
                                               


                                                Songs: <br />
                                                {
                                                    songs.map((song) => {
                                                        const {title, artist, album, artwork, _id} = song
                                                        const id = _id.toString()
                                                        
                                                        return(
                                                            <div className='container'>
                                                                <div className='row'>
                                                                    <div className='col-1'>
                                                                        <input type="checkbox" id="songs[]" name="songs[]" value={`${id}`} />
                                                                    </div>
                                                                    <div className='col-2'>
                                                                        <img  src={artwork} style={{width:'60px',height:'60px'}} alt="" />  
                                                                    </div>
                                                                    <div className='col-9'>
                                                                        <b>{title}</b><br />
                                                                        {artist}<br /><br />
                                                                    </div>
                                                                </div>
                                                            </div>
         
                                                        )
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

            {/* <form action="/playlists" method='POST'>
                Title: <input type="text" name="title" /><br />
                Author: <input type="text" name="author" /><br />
                Description: <input type="text" name="description" /><br />

                <>
                Songs:
                {
                    songs.map((song) => {
                        const {title, artist, album, artwork, _id} = song
                        const id = _id.toString()
                        console.log(song)
                        return(
                            <>
                             <input type="checkbox" id="songs[]" name="songs[]" value={`${id}`} />  {title}<br></br>

                            </>
                            
                               
                               
                              
                            
                        )
                    })
                }
            </>

            
                <input type="submit" value="Submit Playlist" />
            </form> */}
            </>
        )
    }
}

module.exports = New