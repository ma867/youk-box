const React = require('react')


class Default extends React.Component {
    render() {
        const { title, bannerTitleLight, bannerTitleSolid, endpoint, btnName, user } = this.props
        let status = ''
        user === '' ? status = 'login' : status = 'logout'
        return (
            <>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js' />
                        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css' />
                        <link rel='stylesheet' href='https://code.jquery.com/jquery-3.6.0.js' />
                        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/all.css' />
                        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' />
                        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' />
                        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' />
                        <link rel="stylesheet" href="/css/style.css" />
                        <title>{title}</title>
                    </head>
                    <body>
                        <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
                            <div className="container">
                                <a className="navbar-brand" href="#"><img style={{ width: '200px' }} src="https://i.imgur.com/gGmlYWA.png" alt="you-kbox" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <div className="mx-auto"></div>
                                    <ul className="navbar-nav">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="/songs">Songs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="/playlists">Playlists</a>
                                        </li>
                                        <li class="nav-item">
                                            <div id="search-btn" ><div class="nav-link text-white">Search</div></div>
                                        </li>
                                        <form className="form-inline my-2 my-lg-0" action="/search" method='POST' id="search-form">
                                            <input className="form-control search border-0 rounded-0 mr-sm-2" style={{ background: "rgba(255,255,255,0.3)" }} type="text" name="artist" placeholder="Artist" />
                                            <input className="form-control search border-0 rounded-0 mr-sm-2" style={{ background: "rgba(255,255,255,0.3)" }} type="text" name="song" placeholder="Song" />
                                            <button className="btn btn-outline-0 my-2 my-sm-0 text-white" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                                        </form>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href={`/user/${status}`}>Log out</a>
                                        </li>
                    
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="banner-image w-100 d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                            <div className="section-header text-center">
                                <h2 className="fw-bold display-1 text-white"><span className="b-class-secondary">{bannerTitleLight}</span> {bannerTitleSolid}</h2><br />
                                <h5><a className="text-center add text-white justify-content-center" href={`/${endpoint}/new`} style={{ width: "60%" }}>Add {btnName} to library</a></h5>

                            </div>

                        </div>
                        {this.props.children}
                        <footer className="text-light">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 col-lg-4 col-xl-3">
                                        <h5 className="fw-bold">About Us</h5>
                                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                                        <p className="mb-0">
                                            You-kbox is a small music app made with love at General Assembly.
                                        </p>
                                    </div>

                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                                        <ul className="list-unstyled">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                                        <ul className="list-unstyled">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4 col-lg-3 col-xl-3 ">
                                        <h5 className="fw-bold">Follow Us</h5>
                                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                                        <ul className="list-unstyled">
                                            <li><i className="fab fa-twitter mr-2"></i> our-you-kbox</li>
                                            <li><i className="fab fa-instagram mr-2"></i> our-you-kbox</li>


                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-4 box">

                                </div>
                                <div className="col-md-4 box">
                                    <span className="copyright quick-links">Copyright &copy; You-Kbox 2022
                                    </span>
                                </div>
                            </div>
                        </footer>
                        <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>
                        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
                        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></script>
                        <script src="/js/app.js"></script>
                    </body>

                </html>
            </>

        )
    }
}

module.exports = Default
