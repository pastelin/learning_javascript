let jukebox = document.querySelector('ul.player');
jukebox.addEventListener(
    'click',
    function (e) {
        let audioPlayer = document.createElement('audio');
        let songname = e.target.getAttribute('data-src');

        audioPlayer.id = 'player';
        e.target.id = 'playing';
        audioPlayer.src = songname;
        document.body.appendChild(audioPlayer);
        audioPlayer.play();

        audioPlayer.addEventListener('emnded', function () {
            audioPlayer.parentNode.removeChild(audioPlayer);
            e.target.id = '';
        });
    },
    false
);
