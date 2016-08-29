//import React
import React from 'react';

const ContentDetail = (props) => {

	return (

		<div className="art-layout-cell art-sidebar1">
			<div className="art-block">
		    	<div className="art-block-body">
		        	<div className="art-blockheader">
	                    <div className="l"></div>
	                    <div className="r"></div>
	                    <h3 className="t">{props.image.blok_title}</h3>
	                </div>
	                <div className="art-blockcontent">
	                    <div className="art-blockcontent-tl"></div>
	                    <div className="art-blockcontent-tr"></div>
	                    <div className="art-blockcontent-bl"></div>
	                    <div className="art-blockcontent-br"></div>
	                    <div className="art-blockcontent-tc"></div>
	                    <div className="art-blockcontent-bc"></div>
	                    <div className="art-blockcontent-cl"></div>
	                    <div className="art-blockcontent-cr"></div>
	                    <div className="art-blockcontent-cc"></div>
	                    <div className="art-blockcontent-body">
							{props.image.block_content}
	                   		<div className="cleared"></div>
	                    </div>
	                </div>
					<div className="cleared"></div>
		    	</div>
			</div>
			<div className="cleared"></div>
		</div>

		);
}

export default ContentDetail;
