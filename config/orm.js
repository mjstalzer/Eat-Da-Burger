const connection = require("./connection");

const orm = {
    selectAll: (table, cb) => {
        const query = "SELECT * FROM " + table + ";"
        connection.query(query, (err, result) => {
            if (err) throw err
            cb(result);
        })
    },

    insertOne: (table, name, cb) => {
        const query = "INSERT INTO ?? (name) VALUES (?)"
        connection.query(query, [table, name], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: (table, col, val, id_col, id_num, cb) => {
        const query = "UPDATE ?? SET ?? = (?) WHERE ?? = (?)"
        connection.query(query, [table, col, val, id_col, id_num], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm