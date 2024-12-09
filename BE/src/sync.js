const db = require('./models');

db.sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
}).catch(err => {
  console.error('Unable to create tables, shutting down...', err);
});