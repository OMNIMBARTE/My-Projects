document.addEventListener('DOMContentLoaded',()=>{

    const row1 = document.getElementById('row1')
    const video = document.getElementById('pic5')
    const row3 = document.getElementById('row3')
    const memory = document.getElementById('memory')
    const gg1 = document.getElementById('gg1')
    const gg2 = document.getElementById('gg2')

    video.addEventListener('play', () => {
        row1.style.display = 'none';
        row3.style.display = 'none';
        video.style.transform = 'scale(3)';
        video.style.transition = 'transform 0.5s ease-in-out';
        video.style.position = 'relative';
        video.style.top = '150px';

    });
    const resetView = () => {
        row1.style.display = 'flex';
        row3.style.display = 'flex';

        video.style.transform = 'scale(1)';
        video.style.position = 'relative';
        video.style.top = '0';
    };

    video.addEventListener('pause', resetView);
    video.addEventListener('ended', resetView);

    setTimeout(() => {
        gg1.style.visibility = 'visible';
        gg2.style.visibility = 'visible';
        console.log('here we are')
    }, 1200);

});
