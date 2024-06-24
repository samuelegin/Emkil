document.addEventListener("DOMContentLoaded", () => {
    const like = document.querySelector('.bi-heart-fill');
    const likeCountSpan = document.querySelector('#likes');

    let likeCount = 0;
    like.style.color = 'grey';

    like.addEventListener('click', () => {
        if (likeCount < 1) {
            likeCount++;
            likeCountSpan.textContent = likeCount;
            like.style.color = 'red';
            like.style.transition='0.4s ease-in';
        }else {
               like.style.color = 'grey';
               likeCountSpan.textContent=""
            }
    });

    function hidePreloader() {
        document.querySelector('.preloader').style.display = 'none';
    }

    window.addEventListener('load', function () {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('loaded');
        hidePreloader()

    });


    
});
