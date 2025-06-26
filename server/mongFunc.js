import { MongoClient } from "mongodb";
import { config } from "dotenv";
config({ path: '../.env' });
export async function createOp(newuser) {
    const uri = process.env.API_URL;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        await collection.insertOne(newuser);
    } finally {
        await mongoClient.close();
    }
}

export async function deleteOp(name) {
    const uri = process.env.API_URL;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        await collection.deleteMany({ "first_name":name });
    } finally {
        await mongoClient.close();
    }
}

export async function updateOp(name, fields) {
    const uri = process.env.API_URL;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        await collection.updateMany({ "first_name":name }, { $set: fields });
    } finally {
        await mongoClient.close();
    }
}

export async function findOp(name) {
    const uri = process.env.API_URL;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        return await collection.find({ "first_name":name }).toArray().json();
    } finally {
        await mongoClient.close();
    }
}

export async function findAOp() {
    const uri = process.env.API_URL;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('users');
        const collection = db.collection('people');
        return await collection.find({}).toArray();
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
        process.exit(1);
    }
}
