document.querySelector('.grid').addEventListener(
    'mouseover',
    function (e) {
        if (e.target.tagName === 'IMG') {

          let myElement = document.createElement('div');
          myElement.className = 'preview';
          e.target.parentNode.appendChild(myElement);

          let myImg = document.createElement('img');
          let imgLoc = e.target.src;
          myImg.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';
          myElement.appendChild(myImg);

        } // check to see that I clicked on IMG only
    },
    false
); // click event
