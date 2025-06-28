const multer = require("multer");
const express = require("express");
const router = express.Router(); // Create a new router instance

const {
  registerController,
  loginController,
  authController,
  docController,
  deleteallnotificationController,
  getallnotificationController,
  getAllDoctorsControllers,
  appointmentController,
  getAllUserAppointments, // Corrected variable name (removed space)
  getDocsController,
  downloadDocController,
} = require("../controllers/userC");
const authMiddleware = require("../middlewares/authMiddleware");

const upload = multer({ dest: 'uploads/' });

// Define your routes
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/getuserdata", authMiddleware, authController);
router.post("/registerdoc", authMiddleware, docController);
router.get("/getalldoctorsu", authMiddleware, getAllDoctorsControllers);
router.post("/getappointment", upload.single("image"), authMiddleware, appointmentController);
router.post("/getallnotification", authMiddleware, getallnotificationController);
router.post("/deleteallnotification", authMiddleware, deleteallnotificationController);
router.get("/getuserappointments", authMiddleware, getAllUserAppointments); // Corrected variable name
router.get("/getDocsforuser", authMiddleware, getDocsController);

// Export the router
module.exports = router;
