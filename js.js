let current_scroll = 0;
const player = document.querySelector(".player");
const subBtn = document.querySelector(".subscribeBtn");

function giveBg(scroll_pos) {
  playerHeight = player.scrollTop;
  // console.log(playerHeight);
  player.style.backgroundColor = `rgb(${255 - scroll_pos},${255 - scroll_pos},${
    255 - scroll_pos
  })`;
  // if (scroll_pos > 180) {
  //   subBtn.style.display = "hidden";
  // } else {
  //   subBtn.style.display = "";
  // }
}

window.addEventListener("scroll", function (e) {
  current_scroll = window.scrollY;
  // console.log(current_scroll);
  giveBg(window.scrollY);
});

const upNextBtn = document.querySelectorAll(".UpNext .related li");

function clickEvent(event) {
  for (i = 0; i < upNextBtn.length; i++) {
    // upNextBtn[i].classList.remove("active");
    upNextBtn[i].children[0].classList.remove("active");
  }
  event.target.classList.remove("myHover");
  event.target.classList.add("active");
}

function mouseOver(event) {
  if (!event.target.classList.contains("active")) {
    event.target.classList.add("myHover");
  }
}

function mouseLeave(event) {
  event.target.classList.remove("myHover");
}

for (i = 0; i < upNextBtn.length; i++) {
  upNextBtn[i].addEventListener("click", clickEvent);
  upNextBtn[i].children[0].addEventListener("mouseover", mouseOver);
  upNextBtn[i].children[0].addEventListener("mouseleave", mouseLeave);
}

moreVideos = document.querySelectorAll(".UpNext .moreVideos .item");
for (i = 0; i < moreVideos.length; i++) {
  moreVideos[i].addEventListener("mouseover", function (e) {
    console.log(e.currentTarget.children[2].style);
    e.currentTarget.children[2].style.visibility = "visible";
  });
  moreVideos[i].addEventListener("mouseleave", function (e) {
    e.currentTarget.children[2].style.visibility = "hidden";
  });
}
