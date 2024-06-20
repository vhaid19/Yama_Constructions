use("Userdata")
db.createCollection("Visetears")
// db.Visetears.insertMany(
//     [
//         {
//             "age": 19,
//           "Name": "Vahid",
//           "Mail": "vahid.yama@gmail.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 20,
//           "Name": "John",
//           "Mail": "john.doe@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 21,
//           "Name": "Jane",
//           "Mail": "jane.doe@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 22,
//           "Name": "Alice",
//           "Mail": "alice.smith@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 23,
//           "Name": "Bob",
//           "Mail": "bob.jones@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 24,
//           "Name": "Charlie",
//           "Mail": "charlie.brown@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 25,
//           "Name": "David",
//           "Mail": "david.lee@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 26,
//           "Name": "Emma",
//           "Mail": "emma.watson@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 27,
//           "Name": "Frank",
//           "Mail": "frank.sinatra@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         },
//         {
//             "age": 28,
//           "Name": "Grace",
//           "Mail": "grace.kelly@example.com",
//           "Message": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"
//         }
//       ]
// )

// let a = db.Visetears.find({Name: "Grace"});
// console.log(a.toArray());

// db.Visetears.updateOne({Name:"Grace"}, {$set:{Name: "Aksa"}})
// db.Visetears.updateMany({Name:"Grace"}, {$set:{Name: "Aksa"}});
//  db.Visetears.find({age:{$gt:23}});
// console.log(find.toArray());
// console.log(ans);
// for(let i = 0; i < ans ; i++){
//     console.log(ans[i].Name);
// }

db.Visetears.deleteMany({Message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis unde veritatis, quam soluta voluptatum"});