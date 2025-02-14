document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'block';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = document.getElementById('noButton');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});
//I'm using this awesome Css Gradient Pattern from Lea Verou's Gallery: http://lea.verou.me/css3patterns/#hearts

