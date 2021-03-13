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
  {
    name: "Coat",
    link: "coat",
  },
];

const app = express();
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

// GET
app.get("/", (req, res) => {
  console.log(req.params);
  res.render("home-page");
});

app.get("/products", (req, res) => {
  res.render("products", { products });
});

app.get("/products/search", (req, res) => {
  console.log(req.query);
  console.log(
    products.find((e) => e.name.toLowerCase().includes(req.query.product))
  );
  res.render("search-product");
});

app.get("/products/new", (req, res) => {
  res.render("new-product");
});

app.post("/products/new", (req, res) => {
  console.log(req.body);
  const newProductLink = req.body.product.split(" ").join("-");
  products.push({
    name: req.body.product,
    link: newProductLink,
  });
  res.redirect("/products");
});

// /products/jsdhgfdskjghdsfkjghfdskjh
// params: {mufasa: "jsdhgfdskjghdsfkjghfdskjh" }

app.get("/products/:mufasa", (req, res) => {
  console.log(req.params);
  const singleProductLink = req.params.mufasa;
  const singleProduct = products.find(
    (product) => product.link === singleProductLink
  );
  res.render("single-product", { product: singleProduct });
});

app.get("/products/:single/:ladies", (req, res) => {
  console.log(req.params);
  res.redirect("/");
});
// /transport /fluge/ber/th/210401/210430/

// app.get("/products/hoverboard", ())
app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});

app.get("/:dynamic", (req, res) => {
  console.log("THIS IS DYNAMIC ROUTING");
});

// npm init -y

/* // ?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=29475320&inboundaltsenabled=false&infants=0&originentityid=27547053&outboundaltsenabled=false&preferdirects=false&preferflexible=false&ref=home&rtn=1 */
const skyScannerObj = {
  adults: "1",
  adultsv2: "1",
  cabinclass: "economy",
  children: "0",
  childrenv2: "",
  destinationentityid: "29475320",
  inboundaltsenabled: "false",
  infants: "0",
  oritinentityid: "27547053",
  outboundaltsenabled: "false",
  preferdirects: "false",
  preferflexible: "false",
  ref: "home",
  rnt: "1",
};
//?adults=3&adultsv2=3&cabinclass=economy&children=3&childrenv2=7%7c8%7c9&destinationentityid=27536176&inboundaltsenabled=true&infants=0&originentityid=27544072&outboundaltsenabled=true&preferdirects=true&preferflexible=false&ref=home&rtn=1
const lisbonAfricaFlight = {
  adults: "3",
  adultsv2: "3",
  cabinclass: "economy",
  children: "3",
  childrev2: "7%7c8%7c9",
  destinationentityid: "27536176",
  inboundaltsenabled: "true",
  infants: "0",
  originentityid: "27544072",
  outboundaltsenabled: "true",
  preferdirects: "true",
  preferflexible: "false",
  ref: "home",
  rtn: "1",
};
// /products/new
