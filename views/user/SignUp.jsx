const React = require('react')
const Auth = require('../layouts/Auth')


class SignUp extends React.Component {
  render () {
    return (


<Auth title="Sign Up Page" user="">
<nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 bg-dark shadow">
   <div className="container">
     <a className="navbar-brand" href="#"><img style={{width:"200px"}} src="https://i.imgur.com/gGmlYWA.png" alt="you-kbox"/></a>
    <div className="collapse navbar-collapse" id="navbarNav">
     <div className="mx-auto"></div>
      <ul className="navbar-nav">
      </ul>
      
   </div>
    
  </div>

</nav>
<div className="container-fluid ps-md-0">
<div className="row g-0">
<div className="d-none d-md-flex col-md-4 col-lg-6 banner-image justify-content-center align-items-center">
   <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-9 col-lg-8 mx-auto ">
          <div className="section-header text-center">
            <h2 className="fw-bold display-3 text-white">All your favs in<span className="b-className-secondary"> ONE</span><br />place</h2><br />


        </div>

        </div>
      </div>
    </div>
</div>
<div className="col-md-8 col-lg-6">
  <div className="login d-flex align-items-center py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-lg-8 mx-auto">
          <h3 className="login-heading mb-4">Sign Up</h3>

          <form action="/user/signup" method='POST'>
            <div className="form-floating mb-3">

                                                Username: <input className="line mb-3" type="text" name='username' required /><br />
                                                Password: <input className="line mb-3" type="password" name='password' required/><br />
                                                <input className="action btn-login" type="submit" value="Submit Song" />
                                         

              <div className="text-center">
                <a className="small" href="/user/login">Have an account? Log In</a>
              </div>
              </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</Auth>
    )
  }
}

module.exports = SignUp