exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function (t) {
        t.increments("id").unsigned().primary()
        t.string("username")
        t.string("email").notNull()
        t.string("password").notNull()
        t.boolean("deleted").nullable()       
        t.dateTime("createdAt").notNull()
        t.dateTime("updatedAt").nullable()
        t.dateTime("deletedAt").nullable()
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users")        
}
