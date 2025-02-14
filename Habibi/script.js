document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    // Automatic Slide Change for Background
    function changeSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(changeSlide, 3500); // Change background every 3.5 seconds

    // Play GIF independently when entering the home section
    let gif = document.querySelector(".home-gif img");

    function playGif() {
        let newSrc = gif.src; // Refreshing the GIF
        gif.src = "";
        gif.src = newSrc;
    }

    // Detect when home section is in view
    let homeSection = document.querySelector(".home");

    window.addEventListener("scroll", () => {
        let rect = homeSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            playGif(); // Restart GIF when home section is visible
        }
    });


    // Menu Icon and Navbar Setup
    const menuIcon = document.getElementById('menu-icon'); // Ensure this matches your menu icon ID in HTML
    const navbar = document.querySelector('.navbar'); // Ensure this matches your navbar class in HTML

    // Toggle Navbar visibility on menu icon click
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };
});
