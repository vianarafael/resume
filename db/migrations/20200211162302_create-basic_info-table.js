exports.up = function(knex) {
  return knex.schema.createTable("basic-info", table => {
    table.increments().index();
    //name, year, month, day, gender
    table.string("name");
    table.string("year");
    table.string("month");
    table.string("day");
    table.string("gender");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("basic-info");
};
