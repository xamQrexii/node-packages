const jwt = require('jwt-simple');

function getToken() {
    const payload = {
        id: 1,
        username: 'osama'
    }

    const token = jwt.encode(payload, 'secret');
    return { token };
}

function validateToken(token) {
    const decoded = jwt.decode(token, 'secret');
    return decoded
}

// console.log(getToken());
console.log(validateToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJvc2FtYSJ9.YP957jjDOzPuf54kT2KK5tgelLbyXZ66Iws1hvUvAWg'))