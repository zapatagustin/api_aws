const { MOCKE_VIDEO } = require ('../models/videoModel')
const getAllVideos = () => {
    return MOCKE_VIDEO
}

module.exports = { getAllVideos }