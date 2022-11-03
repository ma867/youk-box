const React = require('react')
const Default = require('../layouts/Default')


class Index extends React.Component{
    render(){
        const {playlists} = this.props
        console.log(this.props)
        return(

            <>
              <Default title="Songs Index" bannerTitleLight="Playlist " bannerTitleSolid="Library" endpoint="playlists" btnName="playlist" user="logout">
                    
            
                    <div className="container mt-3 mb-3">
                        <div className="row justify-content-md-center">
                            
                        {
                            playlists.map((playlist) => {
                                const {title, author, description, songs, _id} = playlist
                                return(
                                    <div className="col-sm-3 mb-3">
                                        <div className="card shadow-sm border-0 rounded-0" >
                                            {/* <img className="card-img-top rounded-0" src={artwork} alt="Card image" style={{width:'100%'}}/> */}
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold"><a href={`/playlists/${_id}`}>{title}</a></h5>
                                                <p className = "card-text">Created with love by: {author}</p>
                                                <p className="card-text"><span className="fw-bold">Description: </span>{description}</p>
                                                <p className="card-text"><span className="fw-bold">Songs: </span>{songs.length}</p>
                                                 <form method='POST' action={`/playlists/${_id}?overrideMethod=DELETE`}>
                                                    <input className="action text-center mb-1" type="submit" value="delete" />
                                                </form>
                                                <form method='GET' action={`/playlists/${_id}/edit`}>
                                                    <input className="action text-center"  type="submit" value="edit" />
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
            
            
            
            
            
            
            
            </>
            // <ul>
            //     {
            //         playlists.map((playlist) => {
            //             const {title, author, description, songs, _id} = playlist
            //             return(
            //                 <li>
            //                     <a href={`/playlists/${_id}`}>{title} </a>
            //                      by {author}: {description} <br />
            //                     songs:
            //                     {songs.length}
            //                     <form method='POST' action={`/playlists/${_id}?overrideMethod=DELETE`}>
            //                         <input type="submit" value="delete" />
            //                     </form>
            //                     <form method='GET' action={`/playlists/${_id}/edit`}>
            //                         <input type="submit" value="edit" />
            //                     </form>
            //                 </li>
            //             )
            //         })
            //     }
            // </ul>
        )
    }
}

module.exports = Index