
const sequelize = require('./connection');

const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    try {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.ok) {
            document.location.replace('/dashboard')
        }
    } catch (err) {
        console.log("Error:", err);
    }
}



const signUpFormHandler = async (event) => {
    event.preventDefault();

    const usernamesignUp = document.querySelector('#username-signUp').value.trim();
    const passwordsignUp = document.querySelector('#password-signUp').value.trim();

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ username:usernamesignUp, password:passwordsignUp }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.ok) {
            // var sql = `INSERT INTO User (username, password) VALUES (${usernamesignUp}, ${passwordsignUp})`;
            // con.query(sql, function (err, result) {
            //     if (err) throw err;
            //     console.log("User made!");
            // });
        }
    } catch (err) {
        console.log("Error:", err);
    }
}
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#signUp-form').addEventListener('submit', signUpFormHandler);
