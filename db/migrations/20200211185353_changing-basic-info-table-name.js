exports.up = function(knex) {
  return knex.schema.dropTable("basic-info").then(() => {
    return knex.schema.createTable("basic", table => {
      table.increments().index();
      //name, year, month, day, gender
      table.string("name");
      table.string("year");
      table.string("month");
      table.string("day");
      table.string("gender");
    });
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("basic");
};
