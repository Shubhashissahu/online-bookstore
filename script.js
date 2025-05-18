//login page
$(document).ready(function () {
    $('#togglePassword').click(function () {
      const passwordField = $('#password');
      const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
      passwordField.attr('type', type);
      $(this).text(type === 'password' ? '👁️' : '🙈');
    });
  
    $('#loginForm').submit(function (e) {
      e.preventDefault();
  
      const email = $('#email').val().trim();
      const password = $('#password').val().trim();
  
      if (email === '' || password === '') {
        $('#message').text('Please fill in all fields.');
      } else {
        // Simulate login
        if (email === 'user@example.com' && password === 'password123') {
          $('#message').css('color', 'green').text('Login successful!');
          // Redirect or load dashboard...
        } else {
          $('#message').css('color', 'red').text('Invalid email or password.');
        }
      }
    });
  });

//togle for mobile menu
// $(document).ready(function () {
//     $('#hamburger').click(function () {
//       $('.nav-links').toggleClass('show');
//     });
  
//     $('#search-btn').click(function () {
//       $('#search-container').slideToggle();
//     });
//   });
  
  //shopping cart

  // $(document).ready(function() {
  //   // Create overlay
  //   $('body').append('<div class="cart-overlay"></div>');
    
  //   // Toggle cart
  //   $('#cart-btn').click(function() {
  //     $('#cart-panel').addClass('active');
  //     $('.cart-overlay').show();
  //   });
    
  //   // Close cart
  //   $('.close-cart').click(function() {
  //     $('#cart-panel').removeClass('active');
  //     $('.cart-overlay').hide();
  //   });
    
  //   // Close with overlay
  //   $('.cart-overlay').click(function() {
  //     $('#cart-panel').removeClass('active');
  //     $(this).hide();
  //   });
    
  //   // Close with Escape key
  //   $(document).keydown(function(e) {
  //     if (e.key === 'Escape') {
  //       $('#cart-panel').removeClass('active');
  //       $('.cart-overlay').hide();
  //     }
  //   });
  // });
  // Replace your current cart button code with this
$(document).on('click touchstart', '#cart-btn', function(e) {
  e.preventDefault();
  $('#cart-panel').addClass('active');
  $('.cart-overlay').show();
});

// Update close cart events too
$(document).on('click touchstart', '.close-cart, .cart-overlay', function() {
  $('#cart-panel').removeClass('active');
  $('.cart-overlay').hide();
});

// add cart in item
$(document).ready(function () {
  let cart = [];

  // Add to Cart
  $('.add-to-cart').on('click', function () {
    const card = $(this).closest('.book-card');
    const title = card.data('.book-title');
    const price = parseFloat(card.data('.book-price'));

    const existing = cart.find(item => item.title === title);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ title, price, quantity: 1 });
    }

    updateCartUI();
});
  // Update Cart UI
  function updateCartUI() {
      const $cartItems = $('.cart-items');
      const $badge = $('.cart-badge');
      const $total = $('.total-amount');

      $cartItems.empty(); // Clear current items
      let totalAmount = 0;
      let totalQuantity = 0;

      if (cart.length === 0) {
          $cartItems.html('<li class="empty-cart">Your cart is empty</li>');
          $badge.text(0);
          $total.text('$0.00');
          return;
      }

      cart.forEach(item => {
          const itemTotal = item.price * item.quantity;
          totalAmount += itemTotal;
          totalQuantity += item.quantity;

          $cartItems.append(`
              <li class="cart-item">
                  <span>${item.title}</span>
                  <span>×${item.quantity} - $${itemTotal.toFixed(2)}</span>
              </li>
          `);
      });

      $badge.text(totalQuantity);
      $total.text(`$${totalAmount.toFixed(2)}`);
  }
});

// darkmode style
document.getElementById("toggle-mode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  
  const icon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
  } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
  }
});
// Mobile menu toggle with better animation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            
            // Toggle between hamburger and close icon
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        // Close menu when clicking on links
        document.querySelectorAll('#nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
    }
});