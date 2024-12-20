let jukebox = document.querySelector('ul.player');
jukebox.addEventListener(
    'click',
    function (e) {
        let songName = e.target.getAttribute('data-src');
        let audioPlayer = document.querySelector('#player');

        if (audioPlayer) {
            if (songName === audioPlayer.getAttribute('src')) {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    e.target.id = 'playing';
                } else {
                    audioPlayer.pause();
                    e.target.id = 'paused';
                }
            } else {
                audioPlayer.src = songName;
                audioPlayer.play();

                if (document.querySelector('#playing')) {
                    document.querySelector('#playing').id = '';
                } else {
                    document.querySelector('#paused').id = '';
                }
                e.target.id = 'playing';
            }
        } else {
            let audioPlayer = document.createElement('audio');
            audioPlayer.id = 'player';
            e.target.id = 'playing';
            audioPlayer.src = songName;
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
