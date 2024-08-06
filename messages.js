const { text } = require('express')
const moment = require('moment')
const a = require('./router.js')


function formatMessage (name,text) {
    return{
        name,
        text,
        time:moment().format('h:mm:ss a')
    }
}

module.exports = formatMessage