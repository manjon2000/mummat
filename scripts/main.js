window.addEventListener("DOMContentLoaded", () => {
  // Swap Jupiter
  window.Jupiter.init({
    displayMode: "integrated",
    integratedTargetId: "integrated-terminal",
    endpoint: "https://api.mainnet-beta.solana.com",
  });

  let currentIndexSteps = 0;

  let containerSlider = document.querySelector(".steps");
  let controls = containerSlider.querySelectorAll(
    ".steps__controls > .steps__controls-item"
  );
  let wrapperSlider = document.querySelector(".steps__wrapper");
  let itemsSlider = wrapperSlider.querySelectorAll(".steps-item");
  wrapperSlider.style.width = `${itemsSlider.length * 100}%`;

  itemsSlider.forEach((item) => {
    item.style.width = `${100 / itemsSlider.length}%`;
  });

  controls.forEach((control, index) => {
    control.addEventListener("click", (eL) => {
      removeClassControls();
      eL.target.classList.add('active');
      wrapperSlider.style.transform = `translateX(${
        index * -(100 / itemsSlider.length)
      }%)`;
    });
  });

  function removeClassControls() {
    controls.forEach((control) => {
      control.classList.remove("active");
    });
  }


  const scrollers = document.querySelectorAll(".scroller");

  addAnimation();
  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

});
