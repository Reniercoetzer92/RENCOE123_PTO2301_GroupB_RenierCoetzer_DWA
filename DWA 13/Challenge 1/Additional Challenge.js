const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  /**
   * Console log each product name
   */
  products.forEach(product => console.log(product.product)),
  
  /**
   * Filter out products with names longer than 5 characters
   */
  products.filter(product => product.product.length <= 5),

  /**
   * Convert string prices to numbers, remove products with no prices, and calculate the combined price
   */
  products
    .filter(product => product.price !== '' && !isNaN(Number(product.price)))
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((totalPrice, product) => totalPrice + product.price, 0),

  /**
   * Concatenate all product names
   */
  products.map(product => product.product).reduce((acc, curr) => acc + ', ' + curr),

  /**
   * Calculate highest and lowest-priced items
   */
  products.reduce((result, product) => {
    const price = Number(product.price);
    if (!isNaN(price)) {
      if (!result.highest || price > result.highest.price) {
        result.highest = { name: product.product, price };
      }
      if (!result.lowest || price < result.lowest.price) {
        result.lowest = { name: product.product, price };
      }
    }
    return result;
  }, { highest: null, lowest: null }),

  /**
   * Recreate the object with modified keys
   */
  products.reduce((result, product) => {
    result.push({ name: product.product, cost: product.price });
    return result;
  }, [])
);