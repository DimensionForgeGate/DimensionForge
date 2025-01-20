document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
