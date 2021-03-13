const express = require("express");

const app = express();

app.set("view engine", "hbs");

const team = [
  { name: "Aleksandra", link: "aleksandra" },
  { name: "Aldo", link: "aldo" },
  { name: "Hugo", link: "hugo" },
  { name: "John", link: "john" },
  { name: "Brittney", link: "brittney" },
  { name: "Frankie", link: "frankie" },
  { name: "Gizem", link: "gizem" },
  { name: "Laura", link: "laura" },
  { name: "Khrys", link: "khrys" },
  { name: "Luca Manzo", link: "manzo" },
  { name: "Luca Janssens", link: "janssens" },
  { name: "Luis", link: "luis" },
  { name: "Nelli", link: "nelli" },
  { name: "Ola", link: "ola" },
  { name: "Tadej", link: "tadej" },
  { name: "Tom", link: "tom" },
  { name: "Filipe", link: "filipe" },
  { name: "Andre", link: "andre" },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/products", (req, res) => {
  const products = [
    {
      name: "Flamethrower",
    },
    {
      name: "Parrot Stuff",
    },
  ];

  res.render("products", { products });
});

app.get("/me", (req, res) => {
  res.render("get-me", { team });
});

app.get("/me/:myInfo", (req, res) => {
  // 👆 WTF??
  // WHAT IS that colon?
  // It allows for dynamic routes. /me/bananas, /me/doctors, /me/goofy
  console.log(req.params);
  const user = { name: req.params.myInfo };
  res.render("my-info", user);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  //   this allows for things we have seen before in urls. Like google
  // google.com/q?search=cheap+flight+to+see+penguin+tribes -> internally gets transformed to {search: "cheap flight to see penguin tribes"}
  //   ebay.com/search?product=fungus+chronichles+book&radius=50km&town=london -> internally gets transformed to {product: "fungus chronicles book", radius:"50km", town:"london" }
  res.render("search");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
