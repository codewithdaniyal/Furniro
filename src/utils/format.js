export function formatToRupiah(price) {
  // Convert the price to a string and split it into an array
  const priceArray = price.toString().split("");

  // Initialize variables
  let rupiah = "";
  let count = 0;

  for (let i = priceArray.length - 1; i >= 0; i--) {
    // Append each digit to the rupiah string
    rupiah = priceArray[i] + rupiah;
    // Increment the count
    count++;
    // Add a dot separator after every 3 digits
    if (count % 3 === 0 && i !== 0) {
      rupiah = "." + rupiah;
    }
  }

  // Return the formatted rupiah string
  return "Rp " + rupiah;
}

export const convertToDummyCart = (products) => {
  // Create an object to store the count, price, name, and image of each product ID
  const countMap = {};
  products.forEach((product) => {
    if (!countMap[product.id]) {
      countMap[product.id] = {
        count: 0,
        pricePerItem: product.price, // Store price per item
        name: product.name, // Store product name
        img: product.img, // Store product image
      };
    }
    countMap[product.id].count++;
  });

  // Convert the count map to the dummy cart format
  const dummyCart = Object.entries(countMap).map(
    ([productId, { count, pricePerItem, name, img }]) => ({
      productId: parseInt(productId), // Convert productId to integer
      qty: count,
      pricePerItem,
      name,
      img,
    })
  );

  return dummyCart;
};
