/**
 * @Class productSeeder
 * @param Product
 *
 * Class with seeder functionality
 */
let productSeeder = function (Product) {

  /**
   * Saves a couple of items in the database for testing
   * Deletes all data if deleteData is 'true'
   *
   * @param deleteData
   */
  this.seed = function (deleteData = false) {
    if (deleteData) {
      Product.remove(function (err) {
        if (err) {
          return handleError(err);
        }
        console.log("All items are removed!");
      });
    }

    Product.create({
      name: 'Bier',
      description: 'Een flesje bier',
      price: 1.00,
      image: 'https://drizly-products1.imgix.net/ci-heineken-lager-6ea7dedfaaced647.jpeg?auto=format%2Ccompress&fm=jpeg&q=20',
    });

    Product.create({
      name: 'Wijn',
      description: 'Een glaasje wijn',
      price: 1.50,
      image: 'https://www.bbqenzo.nl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/r/drank-rode-wijn.jpg',
    });

    Product.create({
      name: 'Bacardi Cola',
      description: 'Bacardi rum met Coca Cola',
      price: 3.00,
      image: 'https://www.mitra.nl/cms/userfiles/cocktails/6-bacardi_2.png',
    });

    Product.create({
      name: 'Lachgas',
      description: 'Een ballonnetje met di-stikstof-mono-oxide',
      price: 1.00,
      image: 'https://www.zamnesia.nl/4904-12377/slagroompatronen.jpg',
    });

  };

  return {
    seed: this.seed
  }
};

module.exports = productSeeder;
