document.querySelector('.grid').addEventListener(
    'click',
    (e) => {
        let removeTarget = e.target.parentNode;
        removeTarget.parentNode.removeChild(removeTarget);
    },
    false
);
