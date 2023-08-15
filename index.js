const chance = () => Math.round(Math.random()) ? 5 : -5;
[...document.querySelectorAll('*')].forEach((e) => {
    let duration = 25000 * Math.random();
    let transform = `rotate(${chance()}turn) translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh)`
    e.animate({ transform }, { easing: 'cubic-bezier(1,0,0,1)', duration });
    setTimeout(() => {
        e.style.transform = transform;
        e.animate({ transform: 'translate(0vw, 0vh)' }, { easing: 'cubic-bezier(1,0,0,1)', duration });
        setTimeout(() => {
            e.style.transform = 'translate(0vw, 0vh)';
        }, duration);
    }, duration);
});
