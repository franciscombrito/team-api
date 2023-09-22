const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const team = [
  {
    name: "Francisco Brito",
    projects: [
      {
        name: "Atlas Copco",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Atlas+Copco",
      },
    ],
  },
  {
    name: "Ivo Pereira",
    projects: [
      {
        name: "Atlas Copco",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Atlas+Copco",
      },
    ],
  },
  {
    name: "Fandy Tsui",
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
    projects: [
      {
        name: "GEAR",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Chocolate%2C+working+on+B2B+Commerce+accelerators",
      },
    ],
  },
  {
    name: "Luca di Donato",
    projects: [
      {
        name: "OPLZ",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Green%2C+working+on+OPLZ",
      },
    ],
  },
  {
    name: "Atidivya Patra",
    projects: [
      {
        name: "Mazars",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Grey%2C+working+on+Mazars",
      },
    ],
  },
  {
    name: "Catarina Viegas",
    projects: [
      {
        name: "EduMS",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Orange%2C+working+on+EduMS",
      },
    ],
  },
  {
    name: "Sara Campos",
    projects: [
      {
        name: "EduMS",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Orange%2C+working+on+EduMS",
      },
    ],
  },
  {
    name: "Bas Ariaanz",
    projects: [
      {
        name: "Rensa Family",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Rensa+Family",
      },
    ],
  },
  {
    name: "Francisco Lourenço",
    projects: [
      {
        name: "Rensa Family",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Rensa+Family",
      },
    ],
  },
  {
    name: "César Sá",
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
    projects: [
      {
        name: "Rijk Zwaan",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Rijk+Zwaan",
      },
    ],
  },
  {
    name: "Tiago Lopes",
    projects: [
      {
        name: "Specsavers",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Specsavers",
      },
    ],
  },
  {
    name: "Tiago Viana",
    projects: [
      {
        name: "Specsavers",
        link: "https://confluence.valtech.com/display/VALPOR/Team+Specsavers",
      },
    ],
  },
  {
    name: "Yasmin Habayeb",
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

app.get("/team", (req, res) => {
  res.json(team);
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
