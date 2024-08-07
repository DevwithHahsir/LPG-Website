

const testimonialText = document.querySelector('.testimonialdescrip');

const testimonials = [
    "We have been working with Noor LPG for over 3 years now and have found the company to be extremely accommodating in meeting our unscheduled product requirements. Their commitment to customer service goes way beyond just product delivery through follow-up calls to ensure burners are operating effectively with a smooth flow of LPG. We can always count on NOOR LPG for its superior product quality and for providing our burners with high efficiency fuel.",
    "When we wanted to convert some of our stores to LPG, we were not sure if there was a company out there that could meet all our safety, quality, and price parameters for a sustained long-term commitment. We have collaborated with Noor LPG since the last two years and have found them very much committed to servicing our needs and the company has met all expectations of McDonald’s Pakistan.",
    
    // Add more testimonials as needed
];

let currentIndex = 0;

function changeTestimonial() {
    testimonialText.textContent = testimonials[currentIndex];
    currentIndex = (currentIndex + 1) % testimonials.length;
}

setInterval(changeTestimonial, 3000); // Change testimonial every 5 seconds

