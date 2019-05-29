'strict mode'

window.onload = function() {
    const preview = document.getElementsByClassName('img-prev');
    const image1 = document.getElementById('img1').addEventListener('click', fullPrev);
    function fullPrev() {
        preview[0].classList.remove('invisible');
    }
    function closePrev() {
        // console.log('basdaa');
        preview[0].classList.add('invisible');
    }
    const closePreview = document.getElementById('close').addEventListener('click', closePrev);
}

// image1.onclick = function() {
//     console.log('Yep');
//     preview.style.display = 'visible';
// }