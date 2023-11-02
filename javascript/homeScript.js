
/*** Hero section ***/
let slides = Array.from(document.querySelectorAll(".slide"));
let slidesBtns = Array.from(document.querySelectorAll(".slideBtn"));
let searchBtn = document.querySelector(".searchBtn");
let slidesColors = ["custom-green-", "amber-400", "purple-900", "indigo-900", "red-800"];

// auto Slide  

let nextSlide = () => {
    setInterval(() => {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains("active-slide")) {
                slides[i].classList.add('hidden');
                slides[i].classList.remove('active-slide');
                slidesBtns[i].classList.remove("bg-" + slidesColors[i]);
                slidesBtns[i].classList.add('bg-gray-300');

                if (i == slides.length - 1) {
                    slides[0].classList.remove('hidden');
                    slides[0].classList.add('active-slide');
                    slidesBtns[0].classList.remove('bg-gray-300');
                    slidesBtns[0].classList.add("bg-" + slidesColors[0]);
                }
                else {
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

/*** Categories section ***/
let categoriesInfos = [
    {
        id : 1,
        imgURL : "../images/categories/cat1.webp",
        text : "Engage your community",
        catName : "Content Writing"
    },
    
    {
        id : 2,
        imgURL : "../images/categories/cat2.webp",
        text : "Boost your traffic",
        catName : "SEO"
    },
    
    
    {
        id : 3,
        imgURL : "../images/categories/cat3.webp",
        text : "Build your site",
        catName : "Website Development"
    },
    
    {
        id : 4,
        imgURL : "../images/categories/cat4.webp",
        text : "Elevate your brnad",
        catName : "Logo Design"
    },
    
    {
        id : 5,
        imgURL : "../images/categories/cat5.webp",
        text : "Tell your story",
        catName : "Voice-over"
    },
    
    {
        id : 6,
        imgURL : "../images/categories/cat6.webp",
        text : "Picture your idea",
        catName : "Illustration & Drawing"
    },
    
    {
        id : 7,
        imgURL : "../images/categories/cat7.webp",
        text : "Amplify your network",
        catName : "Social Media Startegy"
    },
    
    {
        id : 8,
        imgURL : "../images/categories/cat8.webp",
        text : "get more customers",
        catName : "SEM, Adwords & PPC"
    },
    
    {
        id : 9,
        imgURL : "../images/categories/cat9.webp",
        text : "Convert more leads",
        catName : "Sales & Calls"
    },
    
    {
        id : 10,
        imgURL : "../images/categories/cat10.webp",
        text : "Ease your workload",
        catName : "Admin Assistance"
    },
    
    {
        id : 11,
        imgURL : "../images/categories/cat11.webp",
        text : "Visualise your story",
        catName : "Videography"
    },
    
    {
        id : 12,
        imgURL : "../images/categories/cat12.webp",
        text : "Reach new audiences",
        catName : "Translation"
    },

    {
        id : 13,
        imgURL : "../images/categories/cat13.webp",
        text : "Bring it to life",
        catName : "Graphic Design"
    }
]

let categoriesCards = Array.from(document.querySelectorAll('.carousel-card'));

let makeCards = (infos) => {
    let i=0;
    categoriesCards.forEach(card => {
        console.log(infos[i].imgURL);
        card.style.backgroundImage = `url("${infos[i].imgURL}")`;
        card.querySelector('p').textContent = infos[i].text;
        card.querySelector('h3').textContent = infos[i].catName;
        i++;
    })
}

makeCards(categoriesInfos);