const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component{
    render(){
        const {tracks} = this.props
        console.log(this.props)
        return(
            <Default title="Search Index" bannerTitleLight="Search " bannerTitleSolid="Songs" endpoint="search" btnName="song" user="logout">
                    
            
            <div className="container mt-3 mb-3">
                <div className="row justify-content-md-center">
	                
                {
                    tracks.map((track) => {
                        console.log(track)
                        
                        return(
                            <div className="col-sm-3 mb-3">
                                

                                <div className="card shadow-sm border-0 rounded-0" >

                                    <div className="album-wrapper">
                                        <img className="card-img-top rounded-0" src={track[3]} alt="Card image" style={{width:'300px', height:'300px'}}/>
                                        <div className="audio-wrapper">
                                            <audio src={track[4]} controls></audio>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{track[0]}</h5>
                                        <p className = "card-text">{track[1]}</p>
                                        <p className="card-text"><span className="fw-bold">Artist: </span>{track[2]}</p>
                                         <form method='POST' action="/songs">
                                                <input className="line mb-3" type="hidden" name="title"  defaultValue={track[0]}/>
                                                <input className="line mb-3" type="hidden" name="artist" defaultValue={track[2]}/>
                                                <input className="line mb-3" type="hidden" name="album" defaultValue={track[1]}/>
                                                <input className="line mb-3" type="hidden" name="artwork" defaultValue={track[3]}/>
                                                <input className="line mb-3" type="hidden" name="audio" defaultValue={track[4]}/>
                                                <input className="action" type="submit" value="Add Song to Library" />
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