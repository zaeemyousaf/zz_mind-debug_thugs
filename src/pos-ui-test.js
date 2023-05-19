Feature('Point of Sale Testing');

Scenario('Verify successful login to the Point of Sale module', ({ I }) => {
  I.amOnPage('https://odoo.com/login');
  I.fillField('username', 'quaidzaeem@gmail.com');
  I.fillField('password', '12345678');
  I.click('Login');
  I.see('Point of Sale Dashboard');
});

Scenario('Add a product to the cart in the Point of Sale module', ({ I }) => {
  I.amOnPage('https://odoo.com/pos');
  I.fillField('productSearch', 'product_name');
  I.click('Search');
  I.click('product_name');
  I.fillField('quantity', '2');
  I.click('Add to Cart');
  I.see('2 x product_name added to cart');
});

Scenario('Process payment in the Point of Sale module', ({ I }) => {
  I.amOnPage('https://odoo.com/pos');
  // Add products to the cart
  // ...
  I.click('Checkout');
  I.selectOption('paymentMethod', 'credit_card');
  I.fillField('paymentAmount', '100');
  I.click('Pay');
  I.see('Payment processed successfully');
});

Scenario('Apply discounts in the Point of Sale module', ({ I }) => {
  I.amOnPage('https://odoo.com/pos');
  // Add products to the cart
  // ...
  I.fillField('discountCode', 'DISCOUNT123');
  I.click('Apply');
  I.see('Discount applied');
  // Check the updated total amount
  // ...
});

Scenario('Generate a receipt in the Point of Sale module', ({ I }) => {
  I.amOnPage('https://odoo.com/pos');
  // Process payment
  // ...
  I.click('Generate Receipt');
  I.see('Receipt generated');
  // Validate receipt details
  // ...
});
