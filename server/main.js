import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/collections/tasks';



Meteor.startup(() => {
  // code to run on server at startups
  const Records = Tasks.find({}).count();

  //console.log( Records );
  //const aa = Tasks.find({}, { limit: 1 }).fetch();
  //console.log( aa );


  if( !Records ){
  	Tasks.insert({
	  title: 'About Us..!!!',
	  url: 'preview.jpg',
	  detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, tellus sit amet congue vulputate, nisi erat iaculis nibh, vitae feugiat sapien ante eget mauris. Cras elit nisl, rhoncus nec iaculis ultricies, feugiat eget sapien. Pellentesque ac felis tellus.Aenean sollicitudin imperdiet arcu, vitae dignissim est posuere id. Duis placerat justo eu nunc interdum ultrices. Phasellus elit dolor, porttitor id consectetur sit amet, posuere id magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse pharetra auctor pharetra. Nunc a sollicitudin est. Curabitur ullamcorper gravida felis, sit amet scelerisque lorem iaculis sed. Donec vel neque in neque porta venenatis sed sit amet lectus. Fusce ornare elit nisl, feugiat bibendum lorem. Vivamus pretium dictum sem vel laoreet. In fringilla pharetra purus, semper vulputate ligula cursus in. Donec at nunc nec dui laoreet porta eu eu ipsum. Sed eget lacus sit amet risus elementum dictum.',
	  blok_title: 'New Block',
	  block_content: 'Enter Block content here...  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, tellus sit amet congue vulputate, nisi erat iaculis nibh, vitae feugiat sapien ante eget mauris.',
	  createdAt: new Date()
	});
  }

  Meteor.publish('tasks', function() {
    const aa = Tasks.find({}, { limit: 2 });
    console.log(aa);
    return aa;
  });
});
const aa = Tasks.find({}, { limit: 2 }).fetch();