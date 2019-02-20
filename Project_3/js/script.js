// Limit the time when detect an event (e.g scroll)
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Select all of the slide-in class
const sliderImages = document.querySelectorAll('.slide-in');
let image = document.querySelector('.featured');
// console.log(image.height);
let slideIn = image.offsetHeight;
console.log(slideIn);
// console.log(sliderImages.height);

function checkSlide(e) {
  // console.log(e);
  // console.count(e);
  // console.log(window.scrollY);
  sliderImages.forEach(sliderImage => {
    // Check position
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;
    console.log(slideInAt);
    const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    // Add or remove active class
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

// detect the scroll event
window.addEventListener('scroll', debounce(checkSlide));