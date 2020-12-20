const connection = require("../database");

exports.isAdminOrEditor = async (req, res, next) => {
    const { rows } = await connection().query(`SELECT * FROM public."users" WHERE "user_id" = '${req.userId}';`);

    if(rows[0].role === 'Admin' || rows[0].role === 'Editor'){
        next();
        return;
    }
    return res.status(403).json({message: 'You do not have permission'});
}

exports.isAdmin = async (req, res, next) => {
    const { rows } = await connection().query(`SELECT * FROM public."users" WHERE "user_id" = '${req.userId}';`);

    if(rows[0].role === 'Admin'){
        next();
        return;
    }
    return res.status(403).json({message: 'You do not have permission'});
}