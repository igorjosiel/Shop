const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/products-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
}

exports.getCart = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart'
    });
  });
}

exports.getCheckout = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/checkout', {
      path: '/checkout',
      pageTitle: 'Checkout'
    });
  });
}