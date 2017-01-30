Template.resturants.helpers({
  resturants: function() {
    return Resturants.find().fetch();
  }
});
