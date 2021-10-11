document.body .addEventListener('mousemove', function (e) {
    console.log(e.clientY);
    console.log(e.clientX);
    var target = document.querySelector('.mouse--follower');

    target.style.left = e.clientX + 'px'
    target.style.top = e.clientY + 'px'

 } )