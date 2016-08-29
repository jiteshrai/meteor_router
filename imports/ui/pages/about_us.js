import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../../collections/tasks';
import ImageDetail from '../components/image_detail';

const AboutUs = (props) => {
		

		console.log( props.tasks );


	//const link = Links.findOne({ token: req.params.token });
	const RenderedImages = Tasks.find({}).fetch().map( function( image ){


		return (
				<div className="art-content-layout-row">
					<ImageDetail key={image._id} image={image} />
				</div>
			);
	});

	return (
		<div>
			{ RenderedImages }
		</div>
		);
}



export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('tasks');

  // return an object.  Whatever we return will be sent to EmployeeList
  // as props
  return { tasks: Tasks.find({}).fetch() };
}, AboutUs);
console.log( Tasks.find({}).fetch() );