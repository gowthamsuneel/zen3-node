var express = require('express');
var router = express.Router();
const { User }  = require('../model/application.model');



/**
 * Create user
 * @param {*} req 
 * @param {*} res 
 */
let save = async(req,res) =>{
    try {
      let {name, favorite, type} = req.body
      let id = await User.countDocuments();
      let input = {
        id : id+1,
        name : name,
        favorite : favorite,
        type : type
      }
      let user = new User(input);
      let response = await  user.save()
        res.send(response)
    } catch (err) {
      console.log(err)
    }
}


/**
 * Update user
 * @param {*} req 
 * @param {*} res 
 */
let update = async(req,res) =>{
  try {
    let filter = req.body.id;
    let update = req.body
    let response = await User.findOneAndUpdate(filter,update,{new :true});
    res.send(response)
  } catch (err) {
    console.log(err)
  }
}

/**
 * Get all users
 * @param {*} req 
 * @param {*} res 
 */
let all = async(req,res) =>{
  try {
    let response = await User.find({});
    res.send(response)
  } catch (err) {
    console.log(err)
  }
}

/**
 * Get user
 * @param {*} req 
 * @param {*} res 
 */
let user = async(req,res) =>{
  try {
    let response = await User.find({id:req.params.id});
    res.send(response)
  } catch (err) {
    console.log(err)
  }
}

/**
 * Delete user
 * @param {*} req 
 * @param {*} res 
 */
let remove = async(req,res) =>{
  try {
    let response = await User.findOneAndDelete({id:req.params.id});
    res.send("Deleted sucessfully");
  } catch (err) {
    console.log(err)
  }
}



module.exports = { save, update, remove, all, user };
