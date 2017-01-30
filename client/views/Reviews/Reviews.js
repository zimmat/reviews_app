Template.reviews.helpers({
  no_of_reviews: function() {
    return Counts.get("reviewsCount")
  }
});
