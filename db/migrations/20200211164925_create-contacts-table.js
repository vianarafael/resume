exports.up = function(knex) {
  return knex.schema.createTable("contacts", table => {
    table.increments().index();
    //name, year, month, day, gender
    table.string("postal");
    table.string("add");
    table.string("phone");
    table.string("mobile");
    table.string("email");
    table.string("contact");
    table.string("contactNumber");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("contacts");
};
