
//Javascript for "Scroll back to top" function (need to add and position button on homepage)
const backToTop = document.querySelector(".back-to-top");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});