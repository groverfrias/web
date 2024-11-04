// Añadir productos al carrito de compras
function addToCart(productId) {
    alert("Producto " + productId + " añadido al carrito.");
}

// Realizar efecto de transición en el carrito
document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('clicked');
        setTimeout(() => card.classList.remove('clicked'), 300);
    });
});
