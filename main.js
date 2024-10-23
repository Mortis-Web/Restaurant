function toggleVisibility() {
  var element = document.getElementById("myElement1");
  var offers = document.getElementById("bluring");
  if (element.style.display === "none") {
    element.style.display = "flex";
    element.scrollIntoView({behavior: "smooth"});
    offers.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
function invis() {
  var element = document.getElementById("myElement1");
  var offers = document.getElementById("bluring");
  if (element.style.display === "flex") {
    element.style.display = "none";
    offers.style.display = "none";
  } else {
    element.style.display = "none";
  }
}
// ===============================
// ===============================

let box = document.querySelectorAll(".bg");
let popup = document.getElementById("myElement1");
let offers = document.getElementById("bluring");
let y = document.getElementById("one");
let z = document.getElementById("two");
let q = document.getElementById("three");
let d = document.getElementById("four");

document.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("bg") &
    !e.target.classList.contains("order-now")
  ) {
    popup.style.display = "none";
    offers.style.display = "none";
  }
});
box.forEach(function (element) {
  element.onclick = toggleVisibility;
  element.addEventListener("click", function (e) {
    const boxpop = element.getBoundingClientRect();
    if(window.matchMedia("(max-width: 992px").matches){
      // popup.style.display= "fixed";
      let height = window.innerHeight;
      popup.style.top = `${height / 2}px`;

    
    }
    if(window.matchMedia("(max-width: 600px)").matches){  
    }


    if (e.target.id === "blur1") {
      y.textContent = "lorem lorem lorem lorem ";
      z.textContent = "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ";
      q.textContent = "100$";
      d.textContent = "200$";
    }
    if (e.target.id === "blur2") {
      y.textContent = "lorem";
      z.textContent = "lorem ipsum dolor";
      q.textContent = "100$";
      d.textContent = "300$";
    }
    if (e.target.id === "blur3") {
      y.textContent = "lorem";
      z.textContent = "lorem ipsum dolor";
      q.textContent = "100$";
      d.textContent = "400$";
    }
    if (e.target.id === "blur4") {
      y.textContent = "lorem";
      z.textContent = "lorem ipsum dolor";
      q.textContent = "100$";
      d.textContent = "500$";
    }
    if (e.target.id === "blur5") {
      y.textContent = "lorem";
      z.textContent = "lorem ipsum dolor";
      q.textContent = "200$";
      d.textContent = "500$";
    }
    if (e.target.id === "blur6") {
      y.textContent = "lorem";
      z.textContent = "lorem ipsum dolor";
      q.textContent = "300$";
      d.textContent = "500$";
    }
    if (e.target.id === "blur7") {
      y.textContent = "lorem";
      z.textContent = "lorem ipsum dolor";
      q.textContent = "400$";
      d.textContent = "500$";
    }
    if (e.target.id === "blur8") {
      y.textContent = "lorem";
      z.textContent = "lorem ipsum dolor";
      q.textContent = "499$";
      d.textContent = "500$";
    }
  });
});

// ===============================
// ===============================

function rate1(button) {
  let x = document.getElementById("rating");
  x.textContent = "its okay!";
}
function rate2() {
  let x = document.getElementById("rating");
  x.textContent = "its not good!";
}
function rate3() {
  let x = document.getElementById("rating");
  x.textContent = "its alright!";
}
function rate4() {
  let x = document.getElementById("rating");
  x.textContent = "its good!";
}
function rate5() {
  let x = document.getElementById("rating");
  x.textContent = "its very good!";
}

function rate6() {
  let x = document.getElementById("rating");
  x.textContent = "its amazing!";
}
function thanks() {
  let x = document.getElementById("rating");
  if (x.textContent !== "rate us!") {
    alert("شكرا لتعاملكم مع مطعم الدمشقي  ");
  } else {
    alert("اختار تقييم يخول");
  }
}

// ===============================
// ===============================

//   if (e.target.id === "blur1" || e.target.id === "blur2" ) {
//     popup.style.top = `0px`

//   }
//   if (e.target.id === "blur3" || e.target.id === "blur4" ) {
//     popup.style.top = `150px`

//   }
//   if (e.target.id === "blur5" || e.target.id === "blur6") {
//     popup.style.top = `350px`
//         }
//   if (e.target.id === "blur7" || e.target.id === "blur8") {
//     popup.style.top = `550px`
//         }
// }
// if (window.matchMedia("(max-width: 600px").matches){
//   if (e.target.id === "blur1") {
//     popup.style.top = `0px`
//   }
//   if (e.target.id === "blur3" || e.target.id === "blur4" ) {
//     popup.style.top = `150px`

//   }
//   if (e.target.id === "blur5" || e.target.id === "blur6") {
//     popup.style.top = `350px`
//         }
//   if (e.target.id === "blur7" || e.target.id === "blur8") {
//     popup.style.top = `550px`
//         }
