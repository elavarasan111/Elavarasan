const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#f39c12';
    button.style.transform = 'scale(1.2)';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#e67e22';
    button.style.transform = 'scale(1)';
});
