const connection = require("./connection");

const orm = {
    selectAll: (table, cb) => {
        const query = "SELECT * FROM " + table + ";"
        connection.query(query, (err, result) => {
            if (err) throw err
            cb(result);
        })
    },

    insertOne: () => {

    },

    updateOne: () => {

    }
}

module.exports = orm