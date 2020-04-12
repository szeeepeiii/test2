const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// var server = require("http").Server(app);
// const io = require("socket.io")(server);
// const users = require("./configs/users")

// var clients = {};

// io.on("connection", function(client) {
//   client.on("sign-in", e => {
//     let user_id = e.id;
//     if (!user_id) return;
//     client.user_id = user_id;
//     if (clients[user_id]) {
//       clients[user_id].push(client);
//     } else {
//       clients[user_id] = [client];
//     }
//   });

//   client.on("message", e => {
//     let targetId = e.to;
//     let sourceId = client.user_id;
//     if(targetId && clients[targetId]) {
//       clients[targetId].forEach(cli => {
//         cli.emit("message", e);
//       });
//     }

//     if(sourceId && clients[sourceId]) {
//       clients[sourceId].forEach(cli => {
//         cli.emit("message", e);
//       });
//     }
//   });

//   client.on("disconnect", function() {
//     if (!client.user_id || !clients[client.user_id]) {
//       return;
//     }
//     let targetClients = clients[client.user_id];
//     for (let i = 0; i < targetClients.length; ++i) {
//       if (targetClients[i] === client) {
//         targetClients.splice(i, 1);
//       }
//     }
//   });
// });

// app.get("/users", (req, res) => {
//   res.send({ data: users });
// });


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mutuaid");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
