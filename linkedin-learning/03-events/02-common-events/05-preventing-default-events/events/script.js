document.querySelector('.grid').addEventListener(
    'mouseover',
    function (e) {
        e.preventDefault();

        if (e.target.tagName === 'IMG') {
            var myElement = document.createElement('div');
            myElement.className = 'preview';
            e.target.parentNode.appendChild(myElement);

            var myImg = document.createElement('img');
            var imgLoc = e.target.src;
            myImg.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';

            myElement.style.left = e.offsetX + 15 + 'px';
            myElement.style.top = e.offsetY + 15 + 'px';

            myElement.appendChild(myImg);

            e.target.addEventListener(
                'mouseout',
                function handler(d) {
                    var myNode =
                        d.target.parentNode.querySelector('div.preview');
                    myNode.parentNode.removeChild(myNode);
                    e.target.removeEventListener('mouseout', handler, false);
                },
                false
            );

            e.target.addEventListener(
                'mousemove',
                function (f) {
                    myElement.style.left = f.offsetX + 15 + 'px';
                    myElement.style.top = f.offsetY + 15 + 'px';
                },
                false
            );
        } // check to see that I clicked on IMG only
    },
    false
); // click event
