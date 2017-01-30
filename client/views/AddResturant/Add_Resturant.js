Template.resturants.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('resturants');
  });
});

Template.resturants.helpers({
  resturants: ()=>{
    return Resturants.find({});
  }
});
