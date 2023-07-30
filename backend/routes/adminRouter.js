const router = require("express").Router();
const Content = require('../modals/contentModal')
const serviceColtroller = require('../controller/serviceController')
const multer = require('multer')
const upload = multer({ dest: "uploads/" });

router.post("/verify", (request, response) => {
  const secrete_code = "778899";

  try {
    const { code } = request.body;
    if (!code) {
      return response.status(400);
    }
    if (code === secrete_code) {
      return response.status(200).json({ message: "unauthorized access" });
    }
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

router.post("/api/service", upload.single("image"), serviceColtroller.uploadDataToDatabase )
router.get("/api/data",serviceColtroller.getAllData);
 

module.exports = router;
