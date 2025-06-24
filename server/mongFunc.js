import { MongoClient } from "mongodb";

export async function createOp(newuser) {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        await collection.insertOne(newuser)
    } finally {
        await mongoClient.close();
    }
 }

 export async function deleteOp(name) {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        await collection.deleteMany({name});
    } finally {
        await mongoClient.close();
    }
 }
 export async function updateOp(name, fields) {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        await collection.updateMany({name}, {$set: fields})
    } finally {
        await mongoClient.close();
    }
 }
 export async function findOp(name) {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        return collection.find({name});
    } finally {
        await mongoClient.close();
    }
 }

 export async function findAOp() {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        return collection.find({});
    } finally {
        await mongoClient.close();
    }
 }

 export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 } 