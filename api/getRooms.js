const express = require('express');
const { default: mongoose } = require('mongoose');
const roomSchema=require('../schema/roomSchema')
const Room=new mongoose.model('room',roomSchema)
const router=express.Router()

router.get('/',async(req,res)=>{
    const result=await Room.find({}).limit(6)
    res.send(result)
    console.log(result)
})

router.post('/',async(req,res)=>{
    const body=req.body
    const newRoom=new Room()
    const result=await newRoom.save()
    console.log(result)
})

module.exports = router ;
