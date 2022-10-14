import mongoose from "mongoose";

// export const connect = () => {
//   return connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

export const connect = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// export const disconnect = () => {
//     return disconnect();
// }

export const disconnect = () => {
  mongoose.connection.close();
};

// export const clearDatabase = async () => {
//     const collections = mongoose.connection.collections;

//     for (const key in collections) {
//         const collection = collections[key];
//         await collection.deleteMany();
//     }
// }
