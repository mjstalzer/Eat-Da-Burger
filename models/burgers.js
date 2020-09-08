const orm = require("../config/orm");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers" , (res) => {
            cb(res);
        })
    },

    add: (col, vals, cb) => {
        orm.insertOne("burgers", vals, (res) => {
            cb(res);
        })
    },

    update: (id_num, cb) => {
        orm.updateOne("burgers", "devoured" , 1, "id", id_num, (res) => {
            cb(res)
        })
    }
}

module.exports = burger;