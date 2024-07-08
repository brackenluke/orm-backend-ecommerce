const catagorySeed = require('./category-seeds');
const productSeed = require('./product-seeds');
const productSeedTag = require('./product-tag-seeds');
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await catagorySeed();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await productSeed();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await tagsSeed();
  console.log('\n----- TAGS SEEDED -----\n');

  await productSeedTag();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
