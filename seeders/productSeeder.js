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
      description: 'Een verfrissend flesje Heineken bier.',
      price: 1.00,
      image: 'https://i.imgur.com/p3doiW0.png',
    });

    Product.create({
      name: 'Wijn',
      description: 'Een lekker wit of rood wijntje naar keuze.',
      price: 1.50,
      image: 'https://i.imgur.com/1QBvnWa.png',
    });

    Product.create({
      name: 'Mix drank',
      description: 'Sterke drank gecombineerd met frisdrank.',
      price: 3.00,
      image: 'https://i.imgur.com/XeSt9Y9.png',
    });

    Product.create({
      name: 'Lachgas',
      description: 'Een ballonnetje met "di-stikstof-mono-oxide"',
      price: 1.00,
      image: 'https://i.imgur.com/NAB3L1q.png',
    });

  };

  return {
    seed: this.seed
  }
};

module.exports = productSeeder;
