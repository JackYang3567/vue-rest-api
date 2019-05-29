/**
 * Mocking client-server processing
 */
const _products = [
  { 'id': 1, 'pic': 'images/products/product1.jpg', 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
  { 'id': 2, 'pic': 'images/products/product2.jpg', 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'pic': 'images/products/product3.jpg', 'title': 'dior wator', 'price': 19.99, 'inventory': 5 },
  { 'id': 4, 'pic': 'images/products/product4.jpg', 'title': 'CUCI', 'price': 9.99, 'inventory': 1 },
  { 'id': 5, 'pic': 'images/products/product5.jpg', 'title': 'PRADA', 'price': 8.99, 'inventory': 10 },
  { 'id': 6, 'pic': 'images/products/product6.jpg', 'title': 'SK-II', 'price': 7.99, 'inventory': 15 },
  { 'id': 7, 'pic': 'images/products/product7.jpg', 'title': 'XX DG', 'price': 6.99, 'inventory': 25 },
  { 'id': 8, 'pic': 'images/products/product8.jpg', 'title': 'FIND', 'price': 22.99, 'inventory': 35 },
  { 'id': 9, 'pic': 'images/products/product1.jpg', 'title': 'LV', 'price': 21.99, 'inventory': 45 },
  { 'id': 10, 'pic': 'images/products/product8.jpg', 'title': 'BABI', 'price': 33.99, 'inventory': 55 },
  { 'id': 11, 'pic': 'images/products/product9.jpg', 'title': 'BABARY', 'price': 39.99, 'inventory': 65 },
  { 'id': 12, 'pic': 'images/products/product8.jpg', 'title': 'BOSS', 'price': 49.99, 'inventory': 75 }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
