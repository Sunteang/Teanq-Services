// navigation
const navBar = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

navBar.addEventListener("click", function () {
  if (navList.classList.contains("active")) {
    navList.classList.remove("active");
  } else {
    navList.classList.add("active");
  }
});

// services
const btnOtherServices = document.querySelector(".services-container > button");

const moreServiceOne = document.querySelector(".more-services1");
const moreServiceTwo = document.querySelector(".more-services2");
const moreServiceThree = document.querySelector(".more-services3");

btnOtherServices.addEventListener("click", () => {
  if (moreServiceOne.classList.contains("hidden")) {
    moreServiceOne.classList.remove("hidden");
  } else {
    moreServiceOne.classList.add("hidden");
  }
});
btnOtherServices.addEventListener("click", () => {
  if (moreServiceTwo.classList.contains("hidden")) {
    moreServiceTwo.classList.remove("hidden");
  } else {
    moreServiceTwo.classList.add("hidden");
  }
});
btnOtherServices.addEventListener("click", () => {
  if (moreServiceThree.classList.contains("hidden")) {
    moreServiceThree.classList.remove("hidden");
  } else {
    moreServiceThree.classList.add("hidden");
  }
});

// testimonial
const people = [
  {
    namePerson: "Serey Sunteang",
    imagePerson: "src/images/team/myprofile1.JPG",
    text: "Working with YourStart has been a game-changer for our business. Their market analysis and strategic insights helped us understand our target audience better and significantly improve our market positioning. Highly recommended!",
  },
  {
    namePerson: "Mizter Teang",
    imagePerson: "src/images/team/teang_image.JPG",
    text: "The brand identity work done by YourStart exceeded our expectations. They captured our vision perfectly and created a cohesive brand that truly resonates with our customers. Their attention to detail and creativity are unmatched.",
  },
  {
    namePerson: "Lik Sophean",
    imagePerson: "src/images/team/skater.jpg",
    text: "We were impressed by the quality and professionalism of YourStart. Their digital marketing strategy drove significant traffic to our site and increased our conversion rates. Their expertise and commitment to our success were evident throughout the process.",
  },
  {
    namePerson: "Mong Thavoroth",
    imagePerson: "src/images/team/m.mask.jpg",
    text: "The team at YourStart delivered exceptional results with their user experience design services. Our websites usability and overall customer satisfaction have greatly improved. Their innovative approach and dedication to quality are commendable.",
  },
  {
    namePerson: "kidd Troller",
    imagePerson: "src/images/team/kidd.jpeg",
    text: "We have seen a remarkable difference in our brands visibility and engagement since partnering with YourStart. Their strategic planning and content creation services have played a crucial role in our growth. They truly understand what it takes to succeed.",
  },
];
const personName = document.querySelector(".name");
const comment = document.querySelector(".testinmonial > p");
const image = document.querySelector(".test-image > img");
const backBtn = document.querySelector(".back-icon");
const nextBtn = document.querySelector(".next-icon");

let numberCounter = 0;
function profileChanging() {
  person = people[numberCounter];
  personName.innerText = person.namePerson;
  comment.innerText = person.text;
  image.src = person.imagePerson;
}

nextBtn.addEventListener("click", function () {
  if (numberCounter == people.length - 1) {
    numberCounter = 0;
  } else {
    numberCounter++;
  }
  profileChanging();
});
backBtn.addEventListener("click", function () {
  if (numberCounter == 0) {
    numberCounter = people.length - 1;
  } else {
    numberCounter--;
  }
  profileChanging();
});

// faq
const faqLinks = document.querySelectorAll(".faq-link");
const faqParagraphs = document.querySelectorAll(".faq-p");

faqLinks.forEach((faqLink, i) => {
  faqLink.addEventListener("click", function () {
    faqParagraphs.forEach((paragraph) => paragraph.classList.remove("active"));
    faqParagraphs[i].classList.toggle("active");
  });
});
