
/* Hero section */
let slides = Array.from(document.querySelectorAll(".slide"));
let slidesBtns = Array.from(document.querySelectorAll(".slideBtn"));
let title = document.querySelector(".title-font");
let searchBtn = document.querySelector(".searchBtn");
let slidesColors = ["custom-green-", "amber-400", "purple-900", "indigo-950", "red-800"];

// auto Slide  

let nextSlide = () => {
    setInterval(() => {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains("active-slide")) {
                // title.classList.remove("text-" + slidesColors[i]);
                slides[i].classList.remove('active-slide');
                slides[i].classList.add('hidden');
                slidesBtns[i].classList.remove("bg-" + slidesColors[i]);
                slidesBtns[i].classList.add('bg-gray-300');

                if (i == slides.length - 1) {
                    // title.classList.add("text-" + slidesColors[0]);
                    slides[0].classList.remove('hidden');
                    slides[0].classList.add('active-slide');
                    slidesBtns[0].classList.remove('bg-gray-300');
                    slidesBtns[0].classList.add("bg-" + slidesColors[0]);

                }

                else {
                    // title.classList.add("text-" + slidesColors[i + 1]);
                    slides[i + 1].classList.remove('hidden');
                    slides[i + 1].classList.add('active-slide');
                    slidesBtns[i + 1].classList.remove('bg-gray-300');
                    slidesBtns[i + 1].classList.add("bg-" + slidesColors[i + 1]);
                }

                break;
            }
        }
    }, 3000);
}
nextSlide();
