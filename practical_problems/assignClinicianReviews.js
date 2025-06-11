/*
[
  {
    id: 1,
    name: "Dr. Smith",
    reviews: [
      { id: 101, clinicianId: 1, text: "Excellent care" },
      { id: 103, clinicianId: 1, text: "Great experience" },
    ]
  },
  {
    id: 2,
    name: "Dr. Johnson",
    reviews: [
      { id: 102, clinicianId: 2, text: "Very attentive" }
    ]
  }
]
*/


const clinicians = [
  { id: 1, name: "Dr. Smith" },
  { id: 2, name: "Dr. Johnson" },
];

const reviews = [
  { id: 101, clinicianId: 1, text: "Excellent care" },
  { id: 102, clinicianId: 2, text: "Very attentive" },
  { id: 103, clinicianId: 1, text: "Great experience" },
];

const r = assignReviews(clinicians, reviews);
console.log(r);

function assignReviews(clinicians, reviews) {
	const clinicianReviews = clinicians.map((clinician) => {
  	return {
    	id: clinician.id,
      name: clinician.name,
      reviews: []
    }
  });
    
  reviews.forEach((review) => {
  	const clinician = clinicianReviews.find(c => c.id === review.clinicianId);
    // added this guard in-case clinician isn't found (undefined)
    if (clinician) {
      clinician.reviews.push(review);
    }    
  });
  
  return clinicianReviews;
}



