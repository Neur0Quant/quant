document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.querySelector('.like-button');
    let isLiked = false;

    likeButton.addEventListener('click', function() {
        isLiked = !isLiked;
        if (isLiked) {
            this.classList.add('liked');
        } else {
            this.classList.remove('liked');
        }
    });

    // Двойной клик на любое место экрана
    document.addEventListener('dblclick', function(e) {
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart');
        heart.style.position = 'absolute';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.color = '#ff2d55';
        heart.style.fontSize = '50px';
        heart.style.transform = 'translate(-50%, -50%) scale(0)';
        heart.style.transition = 'all 0.6s ease';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = 'translate(-50%, -50%) scale(1.2)';
        }, 50);

        setTimeout(() => {
            heart.style.opacity = '0';
        }, 600);

        setTimeout(() => {
            heart.remove();
        }, 1000);

        // Также активируем основную кнопку лайка
        if (!isLiked) {
            isLiked = true;
            likeButton.classList.add('liked');
        }
    });
});
