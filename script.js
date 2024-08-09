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
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpaaut reiciendis rerum, harum porro minus quisquam et voluptatibusiusto ipsa!",
  },
  {
    namePerson: "Mizter Teang",
    imagePerson: "src/images/team/teang_image.JPG",
    text: "Lorem ipsum,dskdfs sljfslf slfjsf dolor sit amet consectetur adipisicing elit. A, quaerat cumque vel reprehenderit accusantium debitis?",
  },
  {
    namePerson: "Lik Sophean",
    imagePerson: "src/images/team/skater.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus harum atque mollitia! Odio, consequuntur est.",
  },
  {
    namePerson: "Mong Thavoroth",
    imagePerson: "src/images/team/m.mask.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident suscipit delectus magnam voluptatibus neque reprehenderit vero?",
  },
  {
    namePerson: "kidd Troller",
    imagePerson: "src/images/team/kidd.jpeg",
    text: "Lorem ipsum dolor sit amet lslfls lsf kfsf;sf ffsfsjf sflsfjfsf sf  fljslfjslf consectetur, adipisicing elit. Aperiam culpa soluta itaque qui suscipit?",
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
