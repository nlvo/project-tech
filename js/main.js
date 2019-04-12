var like = document.querySelectorAll('.card__btn--like'),
    card = document.querySelectorAll('article'),
    cardContainer = document.querySelector('.matches'),
    form = document.querySelector('form'),
    body = document.querySelector('body');
    body.className += 'js-enabled';

function likedProfile(event) {
    event.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
}

for (var i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function (event) {
        event.preventDefault();
        likedProfile(event)    
    }, false);
}

// https://stackoverflow.com/questions/46665554/remove-parent-element-on-click-with-plain-javascript