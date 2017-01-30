Router.configure({
  layoutTemplate: "base"
});


Router.route("home", {
  path: "/"
});
Router.route("Resturants", {
  waitOn: function() {
    return this.subscribe("resturants");
  }
});
Router.route("Resturant", {
  path: "/resturant/:_id",
  waitOn: function(_id) {
    return this.subscribe("resturant", this.params._id);
  },
  data: function() {
    return Resturants.findOne(this.params._id)
  }
});

Router.route("Add_Resturant", {
  waitOn: function() {
    return this.subscribe("AddResturant");
  }
});
