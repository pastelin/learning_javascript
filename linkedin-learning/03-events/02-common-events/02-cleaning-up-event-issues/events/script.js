document.querySelector('.grid').addEventListener(
    'click',
    (e) => {
        if (e.target.tagName === 'IMG') {
            var howMany = document.querySelectorAll('li').length;

            if (howMany) {
                let removeTarget = e.target.parentNode;

                removeTarget.parentNode.removeChild(removeTarget);
            } else {
                let photoTitle = e.target.alt;
                document.querySelector(
                    '#art p'
                ).innerHTML = `<p>You clicked on ${photoTitle}</p>`;
            }
        }
    },
    false
);
