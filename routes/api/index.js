// Import express Router
const router = require("express").Router();

// Import routes from ./api
const communityRoutes = require("./community");
const accountRoutes = require("./account");
const messengerRoutes = require("../../client/src/pages/Messenger")

// Routes
router.use("/community", communityRoutes);
router.use("/account", accountRoutes);
router.use("/messenger",messengerRoutes);

// Export to ../index.js
module.exports = router;
