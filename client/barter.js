Barters = new Meteor.Collection('Barters');

Meteor.autosubscribe(function () {
  Meteor.subscribe('Barters');
});

Template.barter.barters = function() {
	return Barters.find({});
};

Template.barter.helpers({
	title2: function() {
		/*
		if(Session.get('barter_title')) return Session.get('barter_title');
		else return 'no title';*/
		return Session.get('barter_title');
	},
	description2: function() {
		return Session.get('barter_description');
	}
});

Template.barter.events({
	'click input': function() {
		Barters.insert({title: $('#title').val(), description: $('#description').val()});
	},
	'click #show_barter': function() {
		
	},
	'click .barter_item': function() {
		//console.log(this);
		Session.set('barter_title', this.title);
		Session.set('barter_description', this.description);
	}
})

// Barters.insert({description: 'this is gay'});