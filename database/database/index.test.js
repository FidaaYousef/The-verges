// const {MongoClient} = require('mongodb');

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__, {
//       useNewUrlParser: true,
//     });
//     db = await connection.db(global.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//     await db.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = {_id: 'some-user-id', name: 'John'};
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({_id: 'some-user-id'});
//     expect(insertedUser).toEqual(mockUser);
//   });
// });



const { MongoClient } = require("mongodb");

const projectData = {
 projectName: "k1jsdkj",
 projectPassword: "rekgfkd"
  
};

describe("insert", () => {
  let connection;
  let db;
  let URI =
  "mongodb+srv://theverge:theverge@mongodb-3g1rs.mongodb.net/theverge?retryWrites=true&w=majority";
  let dbName = "theverge";

  beforeAll(async () => {
    connection = await MongoClient.connect(URI, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it("create & save project successfully", async () => {
    const Auther = db.collection("authers");

   

    await Auther.insertOne(projectData);
    const insertedProject = await Auther.findOne({ projectName: "k1jsdkj" });
    expect(insertedProject).toEqual(projectData);
  });
})