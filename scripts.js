document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.querySelector('#backto-top-btn');

    window.onscroll = function() {
        showHideBtn();
    };

    function showHideBtn() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }

    backToTopBtn.onclick = function() {
        backToTop();
    };
});

function backToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(backToTop);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}