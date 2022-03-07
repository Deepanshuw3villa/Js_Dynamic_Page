let navtoggler = document.querySelector(".nav-toggler");

navtoggler.addEventListener("click", function () {
  let header = document.querySelector(".nav-box");

  navtoggler.classList.toggle("active");
  let nav = document.querySelector(".menu");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
});
window.addEventListener("scroll", function () {
  let header = document.querySelector(".nav-box");
  let topbtn = document.querySelector("#btn");
  if (window.scrollY >= 100) {
    console.log("scrolling");
    header.style.position = "fixed";
    topbtn.style.display = "block";
    header.style.backgroundColor = "#3949ab";
  } else if (this.window.scrollY <= 50) {
    header.style.background = "transparent";
    topbtn.style.display = "none";
  }
});

const container = document.querySelector(".container");

let fdata = fetch("https://reqres.in/api/users");
fdata
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    const html = data.data
      .map((user) => {
        return `
        <div class="member-info">
        <div class="member-img-div">
            <img src=${user.avatar} alt="img" class="member-img" />
        </div>
        <div class="member-info-details">
            <h4>${user.first_name}${user.last_name}</h4>
            <h6>${user.email}</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum </p>
            <a><i class="fa-brands fa-twitter member-twitter"></i>@${user.first_name}</a>
        </div>
    </div>
       `;
      })
      .join("");
    console.log(html);
    document
      .querySelector(".member-info-div")
      .insertAdjacentHTML("afterbegin", html);
  });

  function topbar(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }