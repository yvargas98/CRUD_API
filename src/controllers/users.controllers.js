const connection = require("../database");
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    bcrypt.hash(req.body.password, 12, async function(err,hash){ 
        await connection().query(`INSERT INTO public.users(email, password, role) 
        VALUES ('${req.body.email}', '${hash}', '${req.body.role}');`);

        res.json({message: 'User created'});
    });
}

exports.getUsers = async (req, res) => {
    try {
        const { rows } = await connection().query('SELECT * FROM public."users" ORDER BY user_id;');
        res.send(rows);
    } catch (error) {
        console.log(error);
    }
}

exports.updateUserById = async (req, res) => {
    const userId = req.params.userId;
    const { rows } = await connection().query(`SELECT * FROM public."users" WHERE "user_id"= ${userId};`);
    if(rows.length){
        if(req.body.password === rows[0].password){
            await connection().query(`UPDATE public.users
            SET email='${req.body.email}', role='${req.body.role}'
            WHERE "user_id"=${userId};`);
            res.json({message:'User updated'});
        }
        else{
            bcrypt.hash(req.body.password, 12, async function(err,hash){ 
                await connection().query(`UPDATE public.users
                SET "email"='${req.body.email}', password='${hash}', role='${req.body.role}'
                WHERE "user_id"=${userId};`);
            
                res.json({message: 'User updated'});
            });
        }
    }
    else{
        res.json({message: 'User not found'});
    }
}

exports.deleteUserById = async (req, res) => {
    const userId = req.params.userId;
    const { rows } = await connection().query(`SELECT * FROM public."users" WHERE "user_id"= ${userId};`);
    if(rows.length){
        await connection().query(`DELETE FROM public.users WHERE "user_id"=${userId};`);
        res.json({message:'User deleted'});
    }
    else{
        res.json({message:'User not found'});
    }
}