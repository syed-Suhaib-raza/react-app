import express from 'express';
import { createOp, updateOp, deleteOp, findAOp, findOp } from '../mongfunc.js';

const router = express.Router();

router.get('/', async (req, res) => {
    console.log("GET API hit");
    try {
        const users = await findAOp();
        res.json(users);
    } catch (error) {
        res.status(500).send("Error retrieving users");
    }
});

router.post('/', async (req, res) => {
    try {
        const user = req.body;
        await createOp(user);
        res.send(`${user.name} has been added to the database`);
    } catch (error) {
        res.status(500).send("Error adding user");
    }
});

router.get('/:first_name', async (req, res) => {
    console.log("GET specific user API hit");
    try {
        const name = req.params.first_name;
        const user = await findOp(name);
        res.json(user);
    } catch (error) {
        res.status(500).send("Error fetching user");
    }
});

router.delete('/:first_name', async (req, res) => {
    try {
        const name = req.params.first_name;
        await deleteOp(name);
        res.send("User has been deleted");
    } catch (error) {
        res.status(500).send("Error deleting user");
    }
});

router.patch('/:first_name', async (req, res) => {
    try {
        const name = req.params.first_name;
        const updates = req.body;
        await updateOp(name, updates);
        res.send(`Changes made to ${name}`);
    } catch (error) {
        res.status(500).send("Error updating user");
    }
});

export default router;
