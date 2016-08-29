import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => {

  return (
    <div>
        <div className="art-nav">
            <div className="art-nav-l"></div>
            <div className="art-nav-r"></div>
            <div className="art-nav-outer">
                <div className="art-nav-wrapper">
                    <div className="art-nav-inner">
                        <ul className="art-hmenu">
                          <li>
                            <Link to="/" className="active"><span className="l"></span><span className="r"></span><span className="t">Home</span></Link>
                          </li><li className="art-hmenu-li-separator"><span className="art-hmenu-separator"> </span></li> 
                          <li>
                            <Link to="/about_us"><span className="l"></span><span className="r"></span><span className="t">About Us</span></Link>
                          </li> 
                          <li>
                            <Link to="/contact_us"><span className="l"></span><span className="r"></span><span className="t">Contact Us</span></Link>
                          </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="cleared reset-box"></div>
        <div className="art-header">
              <div className="art-header-clip">
                  <div className="art-header-center">
                      <div className="art-header-jpeg"></div>
                  </div>
              </div>
              <div className="art-header-wrapper">
                  <div className="art-header-inner">
                      <div className="art-logo">
                          <h1 className="art-logo-name"><Link to="/">First Meteor App</Link></h1>
                              <h2 className="art-logo-text">Only initial satge of new thing creates problem.</h2>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  );
}