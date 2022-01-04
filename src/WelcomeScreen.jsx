import React from "react";
import './WelcomeScreen.scss';
import logo from './img/logo192.png';


function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <img
          src={logo}
          alt="MeetApp logo"
          className="logo"
        />
        <h1>Welcome to the Meet app</h1>
        <h4>
          Log in to see upcoming events around the world for full-stack developers.
        </h4>
        <div className="button_cont">
          <div class="google-btn">
            <button onClick={() => { props.getAccessToken() }}
              rel="nofollow noopener"
              class="btn-text"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
        <a
          href="https://lainamae.github.io/meet/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    )
    : null
}

export default WelcomeScreen;