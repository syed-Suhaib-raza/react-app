import express from 'express';
import { createOp, updateOp, deleteOp, findAOp, findOp, connectToCluster } from '../mongFunc.js';
const router = express.Router();
  router.get('/', (req,res) =>{
    console.log("GET API hit");
    users = findAOp();
    res.send(users);
  })

  router.post('/', (req,res) =>{
    const user = req.body;
    createOp(user);
    res.send(`${user.first_name} has been added to the database`)
  })

  router.get('/:first_name', (req, res) => {
    console.log("NEW API HIT")
    const nId = req.params.first_name;
    us = findOp(nId)
    res.send(us);
  })

  router.delete('/:first_name',(req, res) => {
    const reN = req.params.first_name;
    deleteOp(reN)
    res.send("User has been deleted");
  })

  router.patch('/:first_name', (req, res) =>{
    const reN = req.params.first_name;
    const item = req.body;
    updateOp(reN,item)
    res.send(`Changes made to ${reN}`);

  })

  export default router