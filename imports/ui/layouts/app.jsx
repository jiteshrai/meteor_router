import React from 'react';
import { Navigation } from '../components/navigation';
import { IndexLink, Link } from 'react-router';


export const App = ( { children } ) => {

	return (
	  	<div>
	        <div className="cleared reset-box"></div>
	        <Navigation />
	        <div className="cleared reset-box"></div>
	        { children }
	        <div className="art-footer">
	            <div className="art-footer-t"></div>
	            <div className="art-footer-body">
	                <div className="art-footer-center">
	                    <div className="art-footer-wrapper">
	                        <div className="art-footer-text">
	                            <Link to="#" className="art-rss-tag-icon" title="RSS"></Link>
	                              
	                                <p><Link to="/">Home</Link> | <Link to="/about_us">About Us</Link> | <Link to="/contact_us">Contact Us</Link></p>
	                                <p>Copyright © 2011. All Rights Reserved.</p>

	                              <div className="cleared"></div>
	                              <p className="art-page-footer"><Link to="http://www.2createawebsite.com/artisteer">Website Template created with Artisteer</Link>.</p>
	                        </div>
	                    </div>
	                </div>
	                <div className="cleared"></div>
	            </div>
	        </div>
	        <div className="cleared"></div>
	    </div>

	);
}