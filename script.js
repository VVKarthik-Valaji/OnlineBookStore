let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fadeOut();
}

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader, 4000);
}

// Swiper instances
var booksSwiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var featuredSwiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var arrivalsSwiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var reviewsSwiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var blogsSwiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// document.addEventListener('DOMContentLoaded', () => {
//     const cartItems = [];
//     const cartIcon = document.getElementById('cart-icon');
//     const cartDropdown = document.getElementById('cart-dropdown');
//     const cartList = document.getElementById('cart-items');
//     const totalElement = document.getElementById('total');

//     // Toggle cart dropdown visibility
//     cartIcon.addEventListener('click', () => {
//         cartDropdown.classList.toggle('hidden');
//     });

//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', () => {
//             const bookElement = button.parentElement;
//             const title = bookElement.querySelector('h3').innerText;
//             const price = parseFloat(bookElement.querySelector('.price').innerText.replace('$', ''));

//             // Add book to cart array
//             cartItems.push({ title, price });

//             // Update the cart display
//             updateCartDisplay();
//         });
//     });

//     function updateCartDisplay() {
//         // Clear the current cart display
//         cartList.innerHTML = '';

//         // Update cart items
//         let total = 0;
//         cartItems.forEach((item, index) => {
//             const li = document.createElement('li');
//             li.textContent = `${item.title} - $${item.price.toFixed(2)}`;

//             // Create a remove button
//             const removeBtn = document.createElement('button');
//             removeBtn.textContent = 'Remove';
//             removeBtn.classList.add('remove-btn');
//             removeBtn.addEventListener('click', () => {
//                 // Remove the item from the cart array
//                 cartItems.splice(index, 1);

//                 // Update the cart display
//                 updateCartDisplay();
//             });

//             // Append the remove button to the list item
//             li.appendChild(removeBtn);
//             cartList.appendChild(li);

//             total += item.price;
//         });

//         // Update the total price
//         totalElement.textContent = `Total: $${total.toFixed(2)}`;
//     }
// });



document.querySelector('label[for="search-box"]').addEventListener('click', function() {
    document.getElementById('search-form').submit();
});













document.addEventListener('DOMContentLoaded', function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartIcon = document.getElementById('cart-icon');
    const closeCartButton = document.getElementById('close-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    let cart = [];

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price;
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h3>${item.title}</h3>
                    <p>$${item.price}</p>
                </div>
                <button class="remove-item" data-title="${item.title}">Remove</button>
            `;
            cartItemsList.appendChild(cartItem);
        });

        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');

            const item = {
                title,
                price,
                image
            };

            cart.push(item);
            updateCart();
            cartSidebar.classList.add('visible');
            cartSidebar.classList.remove('hidden');
        });
    });

    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.toggle('visible');
        cartSidebar.classList.toggle('hidden');
    });

    closeCartButton.addEventListener('click', function() {
        cartSidebar.classList.add('hidden');
        cartSidebar.classList.remove('visible');
    });

    cartItemsList.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-item')) {
            const title = e.target.getAttribute('data-title');
            cart = cart.filter(item => item.title !== title);
            updateCart();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }

    // User dropdown
    const userIcon = document.getElementById('user-icon');
    const userDropdown = document.getElementById('userDropdown');
    document.addEventListener('click', function(e) {
        if (userIcon && userDropdown) {
            if (userIcon.contains(e.target)) {
                userDropdown.classList.toggle('show');
            } else if (!userDropdown.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        }
    });

    // Cart sidebar
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    if (cartIcon && cartSidebar) {
        cartIcon.addEventListener('click', function() {
            cartIcon.classList.add('cart-pop');
            cartSidebar.classList.remove('hidden');
            cartSidebar.classList.add('visible');
            setTimeout(() => cartIcon.classList.remove('cart-pop'), 400);
        });
        if (closeCart) {
            closeCart.addEventListener('click', function() {
                cartSidebar.classList.add('hidden');
                cartSidebar.classList.remove('visible');
            });
        }
    }

    // Wishlist sidebar
    const wishlistIcon = document.getElementById('wishlist-icon');
    const wishlistSidebar = document.getElementById('wishlist-sidebar');
    const closeWishlist = document.getElementById('close-wishlist');
    if (wishlistIcon && wishlistSidebar) {
        wishlistIcon.addEventListener('click', function() {
            wishlistSidebar.classList.remove('hidden');
            wishlistSidebar.classList.add('visible');
        });
        if (closeWishlist) {
            closeWishlist.addEventListener('click', function() {
                wishlistSidebar.classList.add('hidden');
                wishlistSidebar.classList.remove('visible');
            });
        }
    }

    // Nav links scroll/alert
    document.getElementById('nav-home')?.addEventListener('click', e => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); });
    document.getElementById('nav-shop')?.addEventListener('click', e => { e.preventDefault(); alert('Shop section coming soon!'); });
    document.getElementById('nav-about')?.addEventListener('click', e => { e.preventDefault(); alert('About section coming soon!'); });
    document.getElementById('nav-contact')?.addEventListener('click', e => { e.preventDefault(); alert('Contact section coming soon!'); });

    // User dropdown links
    document.getElementById('login-link')?.addEventListener('click', e => { e.preventDefault(); alert('Login form coming soon!'); });
    document.getElementById('register-link')?.addEventListener('click', e => { e.preventDefault(); alert('Register form coming soon!'); });
    document.getElementById('profile-link')?.addEventListener('click', e => { e.preventDefault(); alert('Profile page coming soon!'); });

    // Close sidebars/dropdown on outside click
    document.addEventListener('click', function(e) {
        if (cartSidebar && !cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
            cartSidebar.classList.add('hidden');
            cartSidebar.classList.remove('visible');
        }
        if (wishlistSidebar && !wishlistSidebar.contains(e.target) && !wishlistIcon.contains(e.target)) {
            wishlistSidebar.classList.add('hidden');
            wishlistSidebar.classList.remove('visible');
        }
    });
});

// Wishlist and Cart Logic
function getStoredList(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}
function setStoredList(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
}
function renderList(list, container, removeClass, storageKey) {
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = '<li>Your ' + storageKey + ' is empty.</li>';
    return;
  }
  list.forEach((item, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${item.image}" style="width:40px;height:40px;object-fit:cover;margin-right:8px;vertical-align:middle;"> <b>${item.title}</b> - $${item.price} <button class="${removeClass}" data-idx="${idx}">Remove</button>`;
    container.appendChild(li);
  });
}
function updateWishlistUI() {
  const wishlist = getStoredList('wishlist');
  const wishlistItems = document.getElementById('wishlist-items');
  renderList(wishlist, wishlistItems, 'remove-wishlist', 'wishlist');
}
function updateCartUI() {
  const cart = getStoredList('cart');
  const cartItems = document.getElementById('cart-items');
  renderList(cart, cartItems, 'remove-cart', 'cart');
  // Update total
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const totalEl = document.getElementById('total');
  if (totalEl) totalEl.textContent = `Total: $${total.toFixed(2)}`;
}
document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...
  // Add to Wishlist
  document.querySelectorAll('.add-to-wishlist').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const item = {
        title: btn.getAttribute('data-title'),
        price: btn.getAttribute('data-price'),
        image: btn.getAttribute('data-image')
      };
      let wishlist = getStoredList('wishlist');
      if (!wishlist.some(i => i.title === item.title)) {
        wishlist.push(item);
        setStoredList('wishlist', wishlist);
        updateWishlistUI();
      }
    });
  });
  // Add to Cart
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const item = {
        title: btn.getAttribute('data-title'),
        price: btn.getAttribute('data-price'),
        image: btn.getAttribute('data-image')
      };
      let cart = getStoredList('cart');
      cart.push(item);
      setStoredList('cart', cart);
      updateCartUI();
    });
  });
  // Remove from Wishlist
  document.getElementById('wishlist-items').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-wishlist')) {
      let idx = e.target.getAttribute('data-idx');
      let wishlist = getStoredList('wishlist');
      wishlist.splice(idx, 1);
      setStoredList('wishlist', wishlist);
      updateWishlistUI();
    }
  });
  // Remove from Cart
  document.getElementById('cart-items').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-cart')) {
      let idx = e.target.getAttribute('data-idx');
      let cart = getStoredList('cart');
      cart.splice(idx, 1);
      setStoredList('cart', cart);
      updateCartUI();
    }
  });
  // Initial render
  updateWishlistUI();
  updateCartUI();
});




