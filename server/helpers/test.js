import fs from 'fs'
import path from 'path'
import { pool } from './db.js'
import { hash, compare} from 'bcrypt'
import jwt from 'jsonwebtoken'
const { sign } = jwt

const __dirname = import.meta.dirname

const initializeTestDb = () => {
    const sql = fs.readFileSync(path.resolve(__dirname,'../todo.sql'), 'utf8')
    pool.query(sql)
}

const insertTestUser = async (email, password) => {

        const hashedPassword = await hash(password, 10);
        
        await pool.query('INSERT INTO account (email, password) VALUES ($1, $2)', 
            [email, hashedPassword]);

};


const getToken = (email) => {
    return sign({user: email}, process.env.JWT_SECRET_KEY)
}

export { initializeTestDb, insertTestUser , getToken}