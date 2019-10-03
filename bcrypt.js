const bcrypt = require('bcryptjs');

async function hashPassword(plainText) {
    
    const user = {
        name: 'osama',
        email: 'abc@xyz.com',
        password: plainText
    }
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(plainText, salt);

    console.log(user);
}

async function comparePassword(plainText, hash) {

    const isMatch = await bcrypt.compare(plainText, hash);

    if (isMatch) {
        console.log('Password matched');
    } else {
        console.log('Password not matched');
    }

}

hashPassword('123456')

comparePassword('12345', '$2a$10$fbCnJwJJ4z/hl3lMwNeOTO.Ou3m78OHY1PqQtSxNCmYRTAFeHXi6.')