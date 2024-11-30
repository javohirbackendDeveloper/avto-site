const { Router } = require("express"); 
const { getmodels, addModel, updateModel, deleteModel, getOneModel } = require("../controller/carsModel.controller");
const { carModelValidator } = require("../middleware/carModel.middleware");
const verifyAccessToken = require("../middleware/access.middleware");
const {upload} = require("../controller/upload")
const carModelRouter = Router();




carModelRouter.get("/getModels", getmodels);
carModelRouter.get("/getOneModel/:id", getOneModel);
carModelRouter.post("/addModel", [verifyAccessToken, carModelValidator , upload.single("img") ], addModel); 
carModelRouter.put("/updateModel/:id", [verifyAccessToken, carModelValidator], updateModel);
carModelRouter.delete("/deleteModel/:id", verifyAccessToken, deleteModel);

module.exports = carModelRouter;
