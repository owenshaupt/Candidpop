import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }
 
  render() {
    return (
      <div className='splash-master'>
        <div className='splash-container'>
          <div className='phone-image'>
            <img src={window.splashPhonesCompURL}/>
          </div>
          <div className='splash-right-side'>
            <div className='splash-greeting'>
              <h1 className='splash-h1'>REFRAME YOUR SHOT</h1>
              <p className='splash-p'>
                Buy, sell and discover cameras from the most inspiring community of creatives in the world.
              </p>
            </div>
            <div className='splash-buttons-container'>
              <div className='splash-button-holder splash-button-github'>
                <a href="https://github.com/owenshaupt" target="_blank">
                  <div className='splash-button'>
                    <div className='splash-button-icon splash-button-icon-github'>
                      <img className='splash-icon-github' src={window.githubLogoWhiteURL}/>
                    </div>
                    <div className='button-text-container'>
                      <p className='button-text-top'>Check it out on</p>
                      <p className='button-text-bottom'>GitHub</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='splash-button-holder splash-button-linkedin'>
                <a href="https://www.linkedin.com/in/owenshaupt/" target="_blank">
                  <div className='splash-button'>
                    <div className='splash-button-icon'>
                      <img className='splash-icon-linkedin' src={window.linkedinLogoWhiteURL} />
                    </div>
                    <div className='button-text-container'>
                      <p className='button-text-top'>Visit me on</p>
                      <p className='button-text-bottom'>LinkedIn</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;