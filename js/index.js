const services = document.querySelector("#services");
const resume = document.querySelector("#resume");
const PORTFOLIO = document.querySelector("#PORTFOLIO");
const client = document.querySelector("#client");
const contact = document.querySelector("#contact");
const footer = document.querySelector("#footer");
const experiance = document.querySelector("#experiance");
const happy = document.querySelector("#happy");
const done = document.querySelector("#done");
const awards = document.querySelector("#awards");

document.body.addEventListener("mouseover", (e) => {
  if (e.pageY >= 1000) {
    experiance.classList.add("experiance");
    happy.classList.add("happy");
    done.classList.add("Done");
    awards.classList.add("Awards");
    console.log("trigger");
  }
});

// window.alert("Please click in the end of any section to see more content!");
// document.body.addEventListener("click", (e) => {
//   if (e.pageY >= 700) {
//     services.classList.remove("d-none");
//   }

//   if (e.pageY >= 1600) {
//     resume.classList.remove("d-none");
//   }
//   if (e.pageY >= 2417) {
//     PORTFOLIO.classList.remove("d-none");
//   }
//   if (e.pageY >= 3900) {
//     client.classList.remove("d-none");
//   }
//   if (e.pageY >= 5370) {
//     contact.classList.remove("d-none");
//     footer.classList.remove("d-none");
//   }
