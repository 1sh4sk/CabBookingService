const adminModel = require('../models/admin.model')

const createAdminn = async (admin) => {

    console.log(admin);
    
    if (!admin.email || !admin.password) {
        throw new Error('All fields are required')
    }

    const adminn = adminModel.create({
        email: admin.email,
        password: admin.password
    })
    return adminn
}

module.exports = { createAdminn };