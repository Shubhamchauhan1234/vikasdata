const express=require("express")
const {handleGenerateNewShortUrl,handleGetAnalytics,handleGetNewShortUrl}=require("../controllers/url")


const router=express.Router()

router.post('/',handleGenerateNewShortUrl)

router.get('/url/:shortId',handleGetNewShortUrl)

router.get('/analytics/:shortId',handleGetAnalytics)

module.exports= router