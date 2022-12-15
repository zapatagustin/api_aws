const express = require('express')
const router = express.Router()
const {getDetail, getList, createItem, updateItem, deteleItem} = require('../controllers/videoController')
const { checkSession } = require ('../middlewares/origin')

router.get("", getList)
router.get("/:id", getDetail)
router.post("", createItem)
router.delete("/:id", checkSession, deteleItem)
router.put("/:id", updateItem)

module.exports = router