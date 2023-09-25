const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = 3000;
const fs = require("fs");

app.use(cors());

const team = [
  {
    name: "Francisco Brito",
    image: "https://team-api-508w.onrender.com/image/francisco.jpg",
    projects: [
      {
        name: "Atlas Copco",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Atlas+Copco",
      },
    ],
  },
  {
    name: "Ivo Pereira",
    image: "https://team-api-508w.onrender.com/image/ivo.jpg",
    projects: [
      {
        name: "Atlas Copco",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Atlas+Copco",
      },
    ],
  },
  {
    name: "Fandy Tsui",
    image: "https://team-api-508w.onrender.com/image/fandy.png",
    projects: [
      {
        name: "My Vanderlande",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Burgundy%2C+working+on+My+Vanderlande",
      },
      {
        name: "Vallourec",
        link: "",
      },
    ],
  },
  {
    name: "Paulo Simões",
    image: "https://team-api-508w.onrender.com/image/paulo.png",
    projects: [
      {
        name: "My Vanderlande",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Burgundy%2C+working+on+My+Vanderlande",
      },
      {
        name: "Optimizely B2B",
        link: "",
      },
    ],
  },
  {
    name: "Jorge Rocha",
    image: "https://team-api-508w.onrender.com/image/Jorge.jpg",
    projects: [
      {
        name: "GEAR",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Chocolate%2C+working+on+B2B+Commerce+accelerators",
      },
      {
        name: "Easyjet",
        link: "https://confluence.valtech.com/display/VALPOR/Team+easyJet",
      },
    ],
  },
  {
    name: "Martijn Prikkel",
    image: "https://team-api-508w.onrender.com/image/martijn.png",
    projects: [
      {
        name: "GEAR",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Chocolate%2C+working+on+B2B+Commerce+accelerators",
      },
      {
        name: "Easyjet",
        link: "https://confluence.valtech.com/display/VALPOR/Team+easyJet",
      },
    ],
  },
  {
    name: "Sergiu Cebotaru",
    image: "https://team-api-508w.onrender.com/image/sergiu.jpg",
    projects: [
      {
        name: "GEAR",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Chocolate%2C+working+on+B2B+Commerce+accelerators",
      },
    ],
  },
  {
    name: "Luca di Donato",
    image: "https://team-api-508w.onrender.com/image/luca.png",
    projects: [
      {
        name: "OPLZ",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Green%2C+working+on+OPLZ",
      },
    ],
  },
  {
    name: "Atidivya Patra",
    image: "https://team-api-508w.onrender.com/image/Ati.jpg",
    projects: [
      {
        name: "Mazars",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Grey%2C+working+on+Mazars",
      },
    ],
  },
  {
    name: "Catarina Viegas",
    image: "https://team-api-508w.onrender.com/image/catarina.jpg",
    projects: [
      {
        name: "EduMS",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Orange%2C+working+on+EduMS",
      },
    ],
  },
  {
    name: "Sara Campos",
    image: "https://team-api-508w.onrender.com/image/sara.jpg",
    projects: [
      {
        name: "EduMS",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Orange%2C+working+on+EduMS",
      },
    ],
  },
  {
    name: "Bas Ariaanz",
    image: "https://team-api-508w.onrender.com/image/bas-a.png",
    projects: [
      {
        name: "Rensa Family",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Rensa+Family",
      },
    ],
  },
  {
    name: "Francisco Lourenço",
    image: "https://team-api-508w.onrender.com/image/Francisco2.png",
    projects: [
      {
        name: "Rensa Family",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Rensa+Family",
      },
    ],
  },
  {
    name: "César Sá",
    image: "https://team-api-508w.onrender.com/image/cesar.png",
    projects: [
      {
        name: "Rijk Zwaan",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Rijk+Zwaan",
      },
      {
        name: "Vallourec",
        link: "",
      },
    ],
  },
  {
    name: "Rita Neves",
    image: "https://team-api-508w.onrender.com/image/rita.jpg",
    projects: [
      {
        name: "Rijk Zwaan",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Rijk+Zwaan",
      },
    ],
  },
  {
    name: "Tiago Lopes",
    image: "https://team-api-508w.onrender.com/image/TiagoLopes2.jpg",
    projects: [
      {
        name: "Specsavers",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Specsavers",
      },
    ],
  },
  {
    name: "Tiago Viana",
    image: "https://team-api-508w.onrender.com/image/TiagoViana.jpg",
    projects: [
      {
        name: "Specsavers",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Specsavers",
      },
    ],
  },
  {
    name: "Yasmin Habayeb",
    image: "https://team-api-508w.onrender.com/image/yasmin.jpg",
    projects: [
      {
        name: "NCOI",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Yellow%2C+working+on+NCOI+Platform",
      },
    ],
  },
];

const projects = [
  {
    name: "Atlas Copco",
    techStack: ["HTML", "CSS", "Typescript", "Angular", "NgRx", "Rxjs"],
    frontendTeam: ["Ivo Pereira", "Francisco Brito"],
  },
];

// Serve static files from the 'assets' directory
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Define a route to serve images dynamically
app.get("/image/:filename", (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, "assets", filename);

  // Check if the requested file exists
  if (!fs.existsSync(imagePath)) {
    return res.status(404).send("Image not found");
  }

  // Serve the requested image
  res.sendFile(imagePath);
});

app.get("/team", (req, res) => {
  res.json(team);
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
