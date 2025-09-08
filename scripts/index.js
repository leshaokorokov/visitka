const burgerButton = document.querySelector("#burger");
const burgerMenu = document.querySelector(".burger-menu");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu-open");
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const frames = document.querySelectorAll(".frame");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  // Создаем обёртку для слайдера
  const sliderWrapper = document.createElement("div");
  sliderWrapper.classList.add("slider-wrapper");
  slider.insertBefore(sliderWrapper, prevButton);
  frames.forEach((frame) => sliderWrapper.appendChild(frame));

  const slide = (direction) => {
    const width = sliderWrapper.offsetWidth;

    if (direction === "next") {
      currentIndex++;
      if (currentIndex >= frames.length) currentIndex = 0;
    } else if (direction === "prev") {
      currentIndex--;
      if (currentIndex < 0) currentIndex = frames.length - 1;
    }

    sliderWrapper.style.transform = `translateX(-${currentIndex * width}px)`;
  };

  prevButton.addEventListener("click", () => slide("prev"));
  nextButton.addEventListener("click", () => slide("next"));
});
