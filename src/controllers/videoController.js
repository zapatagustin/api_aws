const { getAllVideos } = require ('../services/videoService')

const getList = (req, res) => {
    res.send({ data: getAllVideos() })
}

const getDetail = (req, res) => {
    res.send({ data: 'detail' })
}

const updateItem = (req, res) => {
    res.send({ data: 'update item' })
}

const createItem = (req, res) => {
    res.send({ data: 'create item' })
}

const deteleItem = (req, res) => {
    res.send({ data: 'delete item' })
}

module.exports = {getDetail, getList, updateItem, createItem, deteleItem }