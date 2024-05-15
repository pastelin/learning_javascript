document.querySelector('img.preview').addEventListener(
    'click',
    function (e) {
        let lowRes = e.target.src;
        let myOverlay = document.createElement('.overlay');
        let highRes = document.createElement('img');
        let mySpinner = document.createElement('img');

        myOverlay.style.display = 'block';
        highRes.className = 'bgImg';
        highRes.src = lowRes.substr(0, lowRes.length - 7) + '.jpg';
        myOverlay.appendChild(highRes);

        myOverlay.className = 'spinner';
        mySpinner.src = 'images/spinner.gif';
        myOverlay.appendChild(spinner);

        highRes.addEventListener(
            'load',
            function () {
                mySpinner.parentNode.removeChild(mySpinner);
            },
            false
        );
    },
    false
);
