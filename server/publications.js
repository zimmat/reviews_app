Meteor.publish("resturants",function(){
  return Resturants.find();
});

Meteor.publish("resturant", function(_id){
  return Resturants.find(_id);
});

Meteor.publish('reviews', function() {
  Counts.publish(this, 'reviewsCount', Reviews.find());
});

Meteor.publish("AddResturant", function(){
  return Resturants.find();
});
