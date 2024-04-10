(function () {
    console.log (1)
    const header = document.querySelector('.header')
    window.onscroll = () => {
        console.log (2)
        if (window.pageYOffset > 200) {
            console.log (3)
            header.classList.add('head_active');
        } else {
            header.classList.remove('head_active');
        }
    };
}());