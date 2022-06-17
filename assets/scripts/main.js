$.get("_header.html", contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
});

$.get("_footer.html", contentToInject => {
    $("#footer-placeholder").replaceWith(contentToInject);
});

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})