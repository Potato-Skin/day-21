const express = require("express");

const products = [
  { name: "Hoverboard", link: "hoverboard" },
  { name: "Pencil", link: "pencil" },
  { name: "Keyboard", link: "keyboard" },
  { name: "Chocolate Dwarf", link: "chocolate-dwarf" },
  { name: "Ear Phones", link: "ear-phones" },
  { name: "Notebook", link: "notebook" },
  { name: "The Ostrich Chronicles", link: "the-ostrich-chronicles" },
  {
    name: "The Ostrich Chronicles - The kangaroo edition",
    link: "the-ostrich-chronicles-the-kangaroo-edition",
  },
  { name: "Nodebook", link: "nodebook" },
  { name: "Pickled Bullballs", link: "pickled-bullbalss" },
  { name: "Habanero Sauce", link: "habanero-sauce" },
  {
    name: "Flying Spagetti Monster Memorabilia",
    link: "flying-spagetti-monster-memorabilia",
  },
];

const app = express();
app.set("view engine", "hbs");

// GET
app.get("/", (req, res) => {
  res.render("home-page");
});

app.get("/products", (req, res) => {
  res.render("products", { products });
});

app.get("/products/:mufasa", (req, res) => {
  console.log(req.params);
  const singleProductLink = req.params.mufasa;
  const singleProduct = products.find(
    (product) => product.link === singleProductLink
  );
  res.render("single-product", { product: singleProduct });
});

// app.get("/products/hoverboard", ())
app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});

// npm init -y
