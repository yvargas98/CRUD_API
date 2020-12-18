const connection = require("../database");

exports.createUser = (req, res) => {

}

exports.getUsers = async (req, res) => {
    try {
        const response = await connection().query('SELECT * FROM public."user";');
        res.send(response.rows);
    } catch (error) {
        console.log(error);
    }
}

exports.updateUserById = (req, res) => {
    
}

exports.deleteUserById = (req, res) => {
    
}