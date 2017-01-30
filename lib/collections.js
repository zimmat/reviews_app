Resturants = new Mongo.Collection("resturants");

Resturants.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
})
ResturantSchema = new SimpleSchema({
  Resturant_Name: {
    type: String,
    label: "Name"
  },
  Address: {
    type: String,
    label: "Address"
  },
  Desciption: {
    type: String,
    label: "Desciption"
  },
  Opening_Hours: {
    type: String,
    label: "Opening Hours"
  }

});

Resturants.attachSchema(ResturantSchema );

Reviews = new Mongo.Collection("reviews");
