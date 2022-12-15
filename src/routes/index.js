const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTER = __dirname

const cleanFileName = (fileName) => {
    const clean = fileName.split('.').shift()
    return clean
}

fs.readdirSync(PATH_ROUTER).filter(fileName => {
   const prefixRoute = cleanFileName(fileName) 
    if (prefixRoute !== "index") {
        console.log(`routing ${prefixRoute}`)
        router.use(`/${prefixRoute}`, () => {})
    }
})

module.exports = { router }