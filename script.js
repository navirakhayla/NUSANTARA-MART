document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    const pointsElement = document.getElementById('points');
    const transactionTable = document.getElementById('transactionTable').querySelector('tbody');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let points = 0;
    const cart = [];

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    document.querySelector('nav ul li a[href="#login"]').addEventListener('click', () => {
        modal.style.display = 'block';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login Successful');
        modal.style.display = 'none';
    });

    window.addToCart = (product, price) => {
        cart.push({ product, price });
        updateCart();
    };

    const updateCart = () => {
        transactionTable.innerHTML = '';
        let total = 0;
        cart.forEach((item) => {
            total += item.price;
            const row = transactionTable.insertRow();
            row.insertCell(0).textContent = item.product;
            row.insertCell(1).textContent = `$${item.price.toFixed(2)}`;
        });
        points += Math.floor(total / 10);
        checkoutBtn.disabled = cart.length === 0;
    };

    window.checkout = () => {
        alert('Checkout successful!');
        transactionTable.innerHTML = '<tr><td colspan="2">No items in cart</td></tr>';
        checkoutBtn.disabled = true;
        pointsElement.textContent = points;
    };

    window.scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
});
