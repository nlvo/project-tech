var like = document.querySelector('.card__btn--like'),
    card = document.querySelectorAll('article'),
    cardContainer = document.querySelector('.matches');
    body = document.querySelector('body');
    
    body.className += 'js-enabled';
    
function nextProfile() {
    for(var i = 0; i < card.length; i++){
        if(card[0].classList.contains('show')){
            // console.log(card[i].classList);
            card[0].remove();
        }
    }
    
    

    // for (let i = 0; i < 1; i++) {
    //     // current = card[0];
        
    // }
}

like.addEventListener('click', nextProfile);