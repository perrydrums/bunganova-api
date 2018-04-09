/**
 * @Class usageSeeder
 * @param Usage
 *
 * Class with seeder functionality
 */
let usageSeeder = function (Usage) {

  /**
   * Saves a couple of items in the database for testing
   * Deletes all data if deleteData is 'true'
   *
   * @param deleteData
   */
  this.seed = function (deleteData = false) {
    if (deleteData) {
      Usage.remove(function (err) {
        if (err) {
          return handleError(err);
        }
        console.log("All items are removed!");
      });
    }

    Usage.create({
      user_id: 'PERRY',
      product_id: 'WIJN',
      count: 3,
    });

    Usage.create({
      user_id: 'PERRY',
      product_id: 'BIER',
      count: 10,
    });

  };

  return {
    seed: this.seed
  }
};

module.exports = usageSeeder;
