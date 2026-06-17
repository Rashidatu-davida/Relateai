// ==========================
// FAQ ACCORDION
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector(".desktop-nav");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

    });

}


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert(
            "Thank you for contacting RelateAI. We will get back to you soon."
        );

        contactForm.reset();

    });

}


// ==========================
// SCROLL ANIMATIONS
// ==========================

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document.querySelectorAll(
".about-card, .product-card, .why-grid div, .faq-item"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// ==========================
// HERO BUTTON TRACKING
// ==========================

const productBtn = document.querySelector(".primary-btn");

if(productBtn){

productBtn.addEventListener("click",()=>{

console.log(
"Greetings Generator clicked"
);

});

}
