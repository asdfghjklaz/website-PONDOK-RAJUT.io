// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-product").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active search form
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

const shoppingbag = document.querySelector(".shopping-bag");

document.querySelector("#shopping-bag-button").onclick = (e) => {
  shoppingbag.classList.toggle("active");
  e.preventDefault();
};
// klik di luar side bar untuk menghilangkan nav

const Hm = document.querySelector("#hamburger-product");
const sb = document.querySelector("#search-button");
const sp = document.querySelector("#shopping-bag-button");

document.addEventListener("click", function (e) {
  if (!Hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
  if (!sp.contains(e.target) && !shoppingbag.contains(e.target)) {
    shoppingbag.classList.remove("active");
  }
});

const itemdetailmodal = document.querySelector("#item-detail-modal");
const itemdetailbuttons = document.querySelector(".item-detail-button");

itemdetailbuttons.onclick = (e) => {
  itemdetailmodal.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdetailmodal.style.display = "none";
  e.preventDefault();
};

const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
