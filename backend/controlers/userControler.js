const User = require('../models/userModel')


exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(201).json({
            status: 'sucess',
            data: {
                users
            }
        })
    } catch (err) {
        res.status(401).json({
            status: 'failed',
            message: err
        })
    }
}