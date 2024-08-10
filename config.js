const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG:  process.env.ALIVE_IMG ||"https://telegra.ph/file/27fd62b63ee1069ca1baa.jpg",   
ALIVE_MSG:  process.env.ALIVE_MSG ||"hello, i am CHAMINDU MD i am alive now!",
};

