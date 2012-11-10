Barters = new Meteor.Collection('Barters');

Barters.allow({
	'insert': function(userId, doc) {
		return true;
	}
});

Meteor.publish('Barters', function () {
		return Barters.find({});
});
