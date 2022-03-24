const router = require("express").Router();
const controller = require("../controller/products");

router.get("/", controller.get);
router.get("/:id", controller.search);
router.post("/", controller.store);
router.patch("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;