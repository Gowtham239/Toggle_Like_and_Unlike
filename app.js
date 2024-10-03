const image = document.querySelector(".image");
const likeIcon = document.querySelector("#likeIcon");
const likeButton = document.querySelector("#likeButton");

let imageLiked = false;

function likeBtn() {
    if(imageLiked === false) {
        image.src = 'images/elephant-2.jpg';
        likeIcon.style.color = "#0967d2";
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "#cbd2d9"
        imageLiked = true;
    } else {
        image.src = 'images/elephant.jpg';
        likeIcon.style.color = "#9aa5b1";
        likeButton.style.backgroundColor = "#9aa5b1";
        likeButton.style.color = "#cbd2d9"
        imageLiked = false;
    }
}

likeButton.addEventListener("click", likeBtn);




