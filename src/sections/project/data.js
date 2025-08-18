import RaytracingMonkey from "../../assets/projects/animation/monkey.png";
import RaytracingLighting from "../../assets/projects/animation/lighting.png";
import ProceduralAnimation from "../../assets/projects/animation/procedural.png";
import FlockingModel from "../../assets/projects/animation/flocking.png";
import SpaceOut from "../../assets/projects/hackathon/spaceout.png";
import UTRA from "../../assets/projects/hackathon/utra.jpg";
import GoosePeak from "../../assets/projects/hackathon/goosepeak.jpg";
import StaticSite from "../../assets/projects/fullstack/hackthenorth-staticsite.png";
import ApplySite from "../../assets/projects/fullstack/hackthenorth-apply.png";
import WatCard from "../../assets/projects/fullstack/watcard.png";
import VrSurgery from "../../assets/projects/games/vrsurgery.png";
import Splat from "../../assets/projects/games/splat.png";

const data = [
  {
    source: [RaytracingMonkey, RaytracingLighting],
    title: "Raytracing",
    lang: "C++",
    desc: "rendering 3D models",
    link: "https://github.com/IsaacYu15/RaytracingFromScratch",
  },
  {
    source: [ProceduralAnimation],
    title: "Procedural Animation",
    lang: "Unity, C#",
    desc: "real time walking animations for spiders",
    link: "https://github.com/IsaacYu15/ProceduralWalkingAnimation",
  },
  {
    source: [FlockingModel],
    title: "Flocking Model",
    desc: "simulating schools of fish",
    lang: "Unity, C#",
    link: "https://github.com/IsaacYu15/Boids-Flocking-Algorithm",
  },
  {
    source: [StaticSite, ApplySite],
    title: "Hack the North",
    desc: "frontend for canada's largest hackathon",
    lang: "Typescript, React, GraphQL",
    link: "https://www.loom.com/share/88193fd39f2248a9aaa46972b54be6d6",
  },
  {
    source: [SpaceOut],
    title: "Space Out",
    desc: "flash card game, 1st place Clock Hacks",
    lang: "Unity, C#",
    link: "https://devpost.com/software/spaced-out-fbv7tz",
  },
  {
    source: [UTRA],
    title: "WALL-E",
    desc: "closed challenge, 1st place UTRA",
    lang: "Arduino",
    link: "https://devpost.com/software/wannabe-wall-e",
  },
  {
    source: [GoosePeak],
    title: "Goose Peak",
    desc: "context based productivity extension",
    lang: "Gemini, Javascript, TailwindCSS",
    link: "https://devpost.com/software/goosepeak-hixzd8",
  },
  {
    source: [WatCard],
    title: "WATCard",
    desc: "budgeting app for waterloo's debit card",
    lang: "Postgres, Express, React, Node",
    link: "https://github.com/IsaacYu15/WATCard",
  },
  {
    source: [VrSurgery],
    title: "VR Surgery",
    desc: "robotic surgery simulator",
    lang: "Unity, C#, Oculus Integration",
    link: "https://github.com/IsaacYu15/VR-Surgery",
  },
  {
    source: [Splat],
    title: "SPLAT!",
    desc: "mobile platformer",
    lang: "Unity, C#",
    link: "https://www.youtube.com/watch?v=xSwq6TVdwE0",
  },
];

export default data;
