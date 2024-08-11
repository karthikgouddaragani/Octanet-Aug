document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
        } else {
            document.querySelectorAll('.card').forEach(c => c.classList.remove('expanded'));
            card.classList.add('expanded');
        }
    });
});
