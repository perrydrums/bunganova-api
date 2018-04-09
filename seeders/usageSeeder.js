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
      user_id: '5ac4aacf2bfbf206f7805fb8',
      product_id: '5acb61da980f300b69afcefe',
      count: 3,
    });

    Usage.create({
      user_id: '5ac4aacf2bfbf206f7805fb8',
      product_id: '5acb61da980f300b69afcf00',
      count: 10,
    });

  };

  return {
    seed: this.seed
  }
};

module.exports = usageSeeder;
