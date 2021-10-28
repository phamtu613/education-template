// toggle menu
window.addEventListener("load", function () {
  let iconToggle = document.querySelector(".header-icon-toggle");
  let headerMenu = document.querySelector(".header-menu");
  let department = document.querySelector(".department");
  let careerList = document.querySelector(".career-list");
  let expandClass = "is-expand";

  if (headerMenu) {
    iconToggle.addEventListener("click", () => {
      headerMenu.classList.toggle(expandClass);
    });
  }
  if (headerMenu) {
    iconToggle.addEventListener("click", () => {
      if (department) {
        department.classList.toggle("space-menu-response");
      }
      if (careerList) {
        careerList.classList.toggle("space-menu-response-home2");
      }
    });
  }

  window.addEventListener("click", (e) => {
    if (
      !headerMenu.contains(e.target) &&
      !e.target.matches(".header-icon-toggle")
    ) {
      headerMenu.classList.remove(expandClass);
      if (department) {
        department.classList.remove("space-menu-response");
      }
      if (careerList) {
        careerList.classList.remove("space-menu-response-home2");
      }
    }
  });
  let imgLimitVideoLeaf = document.querySelector(".limit-video-leaf");
  let logo = document.querySelector(".logo");
  let body = document.querySelector("body");
  if (body.className == "home-page2") {
    imgLimitVideoLeaf.setAttribute("src", "./images/img-leaf-video2.png");
    logo.setAttribute("src", "./images/logo2.png");
  }
});
