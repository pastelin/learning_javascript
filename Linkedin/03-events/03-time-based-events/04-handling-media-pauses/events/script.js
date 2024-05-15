let jukebox = document.querySelector('ul.player');
jukebox.addEventListener(
    'click',
    function (e) {
        let songname = e.target.getAttribute('data-src');
        let songPlaying = document.querySelector('#player');

        if (songPlaying) {
            if (songPlaying.paused) {
                songPlaying.play();
                e.target.id = 'playing';
            } else {
                songPlaying.pause();
                e.target.id = 'paused';
            }
        } else {
            let audioPlayer = document.createElement('audio');
            audioPlayer.id = 'player';
            e.target.id = 'playing';
            audioPlayer.src = songname;
            document.body.appendChild(audioPlayer);
            audioPlayer.play();

            audioPlayer.addEventListener('emnded', function () {
                audioPlayer.parentNode.removeChild(audioPlayer);
                e.target.id = '';
            });
        }
    },
    false
);
