import marlstone from "./marlstone.png";
import parkVictoria from "./parkvictoria.png";
import leMarchant from "./lemarchanttower.png";
import fenwick from "./fenwicktower.png";
import southpoint from "./southpoint.png";

export const apartments = [
  {
    id: 1,
    name: "The Marlstone",
    address: "5540 Spring Garden Rd",
    neighbourhood: "Spring Garden",
    rating: 5.0,
    reviewCount: 1,
    summary: "No AI summary yet",
    tags: [],
    image: marlstone
  },
  {
    id: 2,
    name: "Park Victoria",
    address: "1496 Carlton St",
    neighbourhood: "South End",
    rating: 4.5,
    reviewCount: 2,
    summary: "",
    tags: ["Well maintained", "Quiet", "Expensive"],
    image: parkVictoria
  },
  {
    id: 3,
    name: "Le Marchant Towers",
    address: "1585 Le Marchant St",
    neighbourhood: "West End",
    rating: 3.7,
    reviewCount: 3,
    summary: "",
    tags: ["Good location", "Parking limited", "Aging building"],
    image: leMarchant
  },
  {
    id: 4,
    name: "Fenwick Tower",
    address: "5599 Fenwick St",
    neighbourhood: "Downtown",
    rating: 3.3,
    reviewCount: 3,
    summary: "",
    tags: ["Elevator issues", "Great views", "Security concerns"],
    image: fenwick
  },
  {
    id: 5,
    name: "Southpoint Apartments",
    address: "1050 South Park St",
    neighbourhood: "South End",
    rating: 2.5,
    reviewCount: 4,
    summary: "No AI summary yet",
    tags: [],
    image: southpoint
  }
];