const { Router } = require("express");
const productService = require("../services/productService");


const router = Router();

router.get("/", (req, res) => {
    res.render("home", { title: "Browse" });
});

router.get("/create", (req, res) => {
    res.render("create", { title: "Create" });
});

router.post("/create", (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;

    if(name.length < 2){
        res.write("<h1>Incorret length name. Need to be more then two characters<h1>");
        res.end();
        return
    } else if (description.length < 2){
        res.write("<h1>Incorret length name. Need to be more then two characters<h1>");
        res.end();
        return
    } else if (imageUrl.length < 2){
        res.write("<h1>Incorret length name. Need to be more then two characters<h1>");
        res.end();
        return
    }

    productService.create(req.body);
    res.redirect("/products");
});

router.get("/details/:productId", (req, res) => {
    res.render("details", { title: "Product Details" })
})

module.exports = router;