$.get("header.html", contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
});

$.get("footer.html", contentToInject => {
    $("#footer-placeholder").replaceWith(contentToInject);
});

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})