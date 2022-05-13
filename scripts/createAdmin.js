// require('dotenv').config();
// const mongo = require('../config/mongo');
// const User = require('../models/user.model');
import bcrypt from 'bcrypt'
import { config } from 'dotenv'
import { mongo } from 'mongoose';
import connectDB from '../config/db';
import UserModel from '../models/userModel';

const { PANDA_USER, PANDA_PWD } = process.env

config()
connectDB()

const register = async () => {

    const hash = await bcrypt.hash(PANDA_PWD, 10);
    const user = new UserModel({
        username: PANDA_USER,
        password: hash
    });
    try {
        await user.save();
        console.log('admin created');

    } catch (e) {
        switch (e.code) {
            case 11000:
                console.log('ko', { error: 'email already used' });
                break;
            default:
                console.log('ko', { error: e })

        }
    } finally mongo.close()

};

register();
