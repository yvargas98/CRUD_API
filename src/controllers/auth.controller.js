const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require("../database");
require('dotenv').config();

const baseUrl = process.env.WEBAPP_URL || '';
const JWT = process.env.JWT;

exports.login = async (req, res) => {
    const { username, password } = req.body || {};
    const dbPassword = await connection().query(`SELECT "password" FROM public."users" WHERE "email" = '${username}';`);
    if(dbPassword.rows.length){
        const hashPass = dbPassword.rows[0].password;
        const user = await connection().query(`SELECT * FROM public."users" WHERE "email" = '${username}';`);
        const userId = user.rows[0].user_id;
        //para generar las contraseñas de los otros usuarios
        //bcrypt.hash(password, 12, function(err,hash){ console.log(hash)});
        const isCorrectPassword = await bcrypt.compare(password, hashPass);
        if(isCorrectPassword && userId){
            const token = jsonwebtoken.sign({
                name: username,
                email: username,
                logoutUrl: 'logout',
                userId,
                role: user.rows[0].role
            }, JWT, {expiresIn: 86400});
            res.cookie('token', token);
            res.send(token);
            return;
        }
    }
    res.clearCookie('token');
    res.status(403).send(`${baseUrl}/${403}`);
};

exports.logout = async(req, res) => {
    res.clearCookie('token');
    res.redirect(baseUrl);
}