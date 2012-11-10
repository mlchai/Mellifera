Barters = new Meteor.Collection('Barters');

Meteor.autosubscribe(function () {
  Meteor.subscribe('Barters');
});

Template.barter.barters = function() {
	return Barters.find({});
};



Template.barter.events({
	'click input': function() {
		Barters.insert({title: $('#title').val(), description: $('#description').val()});
	}
})

// Barters.insert({description: 'this is gay'});