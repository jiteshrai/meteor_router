// import react
import React from 'react';
import ContentDetail from './content_detail';

//Create components
const ImageDetail = (props) => {
	return (
		<div>
                <div className="art-layout-cell art-content">
				    <div className="art-post">
				        <div className="art-post-tl"></div>
				        <div className="art-post-tr"></div>
				        <div className="art-post-bl"></div>
				        <div className="art-post-br"></div>
				        <div className="art-post-tc"></div>
				        <div className="art-post-bc"></div>
				        <div className="art-post-cl"></div>
				        <div className="art-post-cr"></div>
				        <div className="art-post-cc"></div>
				        <div className="art-post-body">
				            <div className="art-post-inner art-article">
				                <h2 className="art-postheader">{props.image.title}</h2>
				                <div className="cleared"></div>
				                <div className="art-postcontent">
				                	<img src={ 'images/' + props.image.url } alt="an image" style={{float: 'left'}} />
				                    {props.image.detail}
				                </div>
				                <div className="cleared"></div>
				            </div>
				            <div className="cleared"></div>
				        </div>
				      </div>
				  <div className="cleared"></div>
				</div>

					<ContentDetail image={props.image} />
		</div>
			);
	}

// Export components
export default ImageDetail;
