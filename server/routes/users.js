import express from 'express';
import {v4 as uuidv4} from 'uuid';
const router = express.Router();

var users =
    [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alicesmith@example.com',
    },
    {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'janedoe@example.com',
      }];
  router.get('/', (req,res) =>{
    console.log("GET API hit");
    res.send(users);
  })

  router.post('/', (req,res) =>{
    const user = req.body;
    users.push({...user, id: uuidv4()});

    res.send(`${user.first_name} has been added to the database`)
  })

  router.get('/:first_name', (req, res) => {
    console.log("NEW API HIT")
    const nId = req.params.first_name;
    const us = users.find((user) => user.first_name === nId);
    res.send(us);
  })

  router.delete('/:first_name',(req, res) => {
    const reN = req.params.first_name;
    const l = users.length;
    var index = users.findIndex(user => user.first_name === reN);
    if(index !== -1){
      users.splice(index,1);
    }
    res.send("User has been deleted");
  })

  router.patch('/:first_name', (req, res) =>{
    const reN = req.params.first_name;
    const item = req.body;
    var us = users.findIndex(user => user.first_name === reN);
    if(us !== -1){
      users[us] = {...users[us],...item}
    }
    res.send(`Changes made to ${reN}`);

  })

  export default router