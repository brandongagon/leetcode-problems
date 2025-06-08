/*

Group maintenance reviews by property ID

Expected Output:
{
    "properties": [
        {"property_id": "P1", "reviews": ["Excellent maintenance service!", "Quick response, but a bit pricey.", "Poor service, would not recommend."]},
        {"property_id": "P2", "reviews": ["They're okay, not great.", "Very efficient and professional!"]},
        {"property_id": "P3", "reviews": ["Did not meet expectations."]}
    ]
}

*/

// Sample dataset
const reviews = [
    {"review_id": "101", "property_id": "P1", "rating": 5, "review": "Excellent maintenance service!"},
    {"review_id": "102", "property_id": "P2", "rating": 3, "review": "They're okay, not great."},
    {"review_id": "103", "property_id": "P1", "rating": 4, "review": "Quick response, but a bit pricey."},
    {"review_id": "104", "property_id": "P3", "rating": 2, "review": "Did not meet expectations."},
    {"review_id": "105", "property_id": "P1", "rating": 1, "review": "Poor service, would not recommend."},
    {"review_id": "106", "property_id": "P2", "rating": 5, "review": "Very efficient and professional!"}
]


function groupReviewsByProperty(reviews) {
  const grouped = {};

  for (let i=0;i<reviews.length;i++) {
    let review = reviews[i];
    if (!grouped[review.property_id]) {
      grouped[review.property_id] = [];
    }
    grouped[review.property_id].push(review.review);
  }

  return {
    properties: Object.entries(grouped).map(([property_id, review]) => {
      return {
        property_id,
        review
      }
    })
  }
}

const r = groupReviewsByProperty(reviews);

console.log(r.properties);
