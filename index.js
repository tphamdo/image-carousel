function CarouselController() {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelector(".carousel").children;
  const dotsContainer = document.querySelector(".dots-container");
  var dots;

  let index = 0;
  const init = () => {
    if (images) {
      console.log(images);
      console.log(images.item(index));
      images.item(index).classList.add("visible");
    }

    // create dots/indicators
    for (let i = 0; i < images.length; ++i) {
      dotsContainer.appendChild(createDot(i));
    }
    dots = dotsContainer.children;

    function createDot(index) {
      const span = document.createElement("span");
      span.classList.add("dot");
      if (index === 0) span.classList.add("active");
      span.addEventListener("click", () => goToSlide(index));
      return span;
    }
  };

  const next = () => {
    if (index + 1 >= images.length) return;
    images[index].classList.remove("visible");
    images[index + 1].classList.add("visible");
    dots[index].classList.remove("active");
    dots[index + 1].classList.add("active");
    index++;
  };

  const prev = () => {
    if (index - 1 < 0) return;
    images[index].classList.remove("visible");
    images[index - 1].classList.add("visible");
    dots[index].classList.remove("active");
    dots[index - 1].classList.add("active");
    index--;
  };

  const goToSlide = (i) => {
    console.log("go to slide");
    if (i >= images.length || i < 0) return;
    images[index].classList.remove("visible");
    images[i].classList.add("visible");
    dots[index].classList.remove("active");
    dots[i].classList.add("active");
    index = i;
  };

  return { init, next, prev };
}

const carousel = CarouselController();
carousel.init();

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", carousel.next);
prevButton.addEventListener("click", carousel.prev);
