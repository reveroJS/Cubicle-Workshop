const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.render("home", { title: "Browse" });
});

router.get("/create", (req, res) => {
    res.render("create", { title: "Create" });
});

router.post("/create", (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;

    console.log(name);
    console.log(description);
    console.log(imageUrl);
    console.log(difficultyLevel);
});

router.get("/details/:productId", (req, res) => {
    res.render("details", { title: "Product Details" })
})

module.exports = router;