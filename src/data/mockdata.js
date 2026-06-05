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
    image: marlstone,
    description: "Located in the heart of Spring Garden.",
    landlord: "Montez Corporation",
    yearBuilt: 2010
  },
  {
    id: 2,
    name: "Park Victoria",
    address: "1496 Carlton St",
    neighbourhood: "South End",
    rating: 4.5,
    reviewCount: 2,
    summary: "Park Victoria offers modern amenities and a convenient location in the South End. Tenants praise the well-maintained facilities and quiet atmosphere, though some note that it can be on the expensive side.",
    tags: ["Well maintained", "Quiet", "Expensive"],
    image: parkVictoria,
    description: "A modern building with great amenities.",
    landlord: "Park Victoria Management",
    yearBuilt: 2015,
    neighbourhood: "South End"
  },
  {
    id: 3,
    name: "Le Marchant Towers",
    address: "1585 Le Marchant St",
    neighbourhood: "West End",
    rating: 3.7,
    reviewCount: 3,
    summary: "Le Marchant Towers is a classic building with a central location. Tenants appreciate the good location, but some mention limited parking and an aging building.",
    tags: ["Good location", "Parking limited", "Aging building"],
    image: leMarchant,
    description: "Classic architecture with a central location.",
    landlord: "Le Marchant Properties",
    yearBuilt: 1985,
    neighbourhood: "West End"
  },
  {
    id: 4,
    name: "Fenwick Tower",
    address: "5599 Fenwick St",
    neighbourhood: "Downtown",
    rating: 3.3,
    reviewCount: 3,
    summary: "Fenwick Tower is a high-rise building with stunning city views. Tenants appreciate the modern amenities and location, but some have reported elevator issues and security concerns.",
    tags: ["Elevator issues", "Great views", "Security concerns"],
    image: fenwick,
    description: "High-rise living with stunning city views.",
    landlord: "Fenwick Management",
    yearBuilt: 1990,
    neighbourhood: "Downtown"
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
    image: southpoint,
    description: "Affordable housing option in a convenient location.",
    landlord: "Southpoint Rentals",
    yearBuilt: 1975,
    neighbourhood: "South End"
  }
];


export const reviews = [
  {
    id: 1,
    apartmentId: 1,
    user: "Alex M",
    rating: 5,
    date: "2026-01-15",
    text: "I love living at The Marlstone! The location is perfect and the management is very responsive. Highly recommend!"
  },
  {
    id: 1,
    apartmentId: 2,
    user: "Alex M",
    rating: 4,
    date: "2026-01-15",
    text: "Park Victoria is a nice place to live. The amenities are great and it's close to everything. It's a bit pricey, but worth it for the quality."
  },
  {
    id: 1,
    apartmentId: 3,
    user: "Alex M",
    rating: 3,
    date: "2026-01-15",
    text: "Le Marchant Towers has a great location, but the building is a bit old and parking can be a hassle. It's an okay place to live if you don't mind those issues."
  },
  {
    id: 1,
    apartmentId: 4,
    user: "Alex M",
    rating: 3,
    date: "2026-01-15",
    text: "Fenwick Tower has amazing views and great amenities, but the elevator can be unreliable and I've had some security concerns. It's a mixed experience."
  },
  {
    id: 1,
    apartmentId: 5,
    user: "Alex M",
    rating: 2,
    date: "2026-01-15",
    text: "Southpoint Apartments is an affordable option, but the building is old and maintenance can be slow. It's not the best place to live, but it works if you're on a tight budget."
  },
  {
    id: 2,
    apartmentId: 2,
    user: "Bob Johnson",
    rating: 4,
    date: "2026-02-20",
    text: "Park Victoria is a nice place to live. The amenities are great and it's close to everything. It's a bit pricey, but worth it for the quality."
  },
  {
    id: 3,
    apartmentId: 2,
    user: "Carol Lee",
    rating: 5,
    date: "2026-03-05",
    text: "I had a great experience at Park Victoria. The staff is friendly and the building is well-maintained. I would definitely recommend it to others."
  },
  {
    id: 4,
    apartmentId: 3,
    user: "David Kim",
    rating: 3,
    date: "2026-01-30",
    text: "Le Marchant Towers has a great location, but the building is a bit old and parking can be a hassle. It's an okay place to live if you don't mind those issues."
  },
  {
    id: 5,
    apartmentId: 3,
    user: "Emily Davis",
    rating: 4,
    date: "2026-02-10",
    text: "I enjoyed living at Le Marchant Towers. The location is fantastic and the rent is reasonable. Just be prepared for an older building."
  },
  {
    id: 6,
    apartmentId: 3,
    user: "Frank Wilson",
    rating: 4,
    date: "2026-03-01",
    text: "Le Marchant Towers is a solid choice if you want to be in the West End. The building is older, but the location makes up for it. Just be aware of the parking situation."
  },
  {
    id: 7,
    apartmentId: 4,
    user: "Grace Miller",
    rating: 3,
    date: "2026-01-25",
    text: "Fenwick Tower has amazing views and great amenities, but the elevator can be unreliable and I've had some security concerns. It's a mixed experience."
  },
  {
    id: 8,
    apartmentId: 4,
    user: "Henry Brown",
    rating: 4,
    date: "2026-02-15",
    text: "I like living at Fenwick Tower. The views are fantastic and the location is convenient. Just be prepared for occasional elevator issues."
  },
  {
    id: 9,
    apartmentId: 4,
    user: "Isabella Garcia",
    rating: 3,
    date: "2026-03-10",
    text: "Fenwick Tower has its pros and cons. The views are amazing, but the security could be better and the elevator can be a pain. It's an okay place to live if you value the location."
  },
  {
    id: 10,
    apartmentId: 5,
    user : "Jack Martinez",
    rating: 2,
    date: "2026-01-20",
    text: "Southpoint Apartments is an affordable option, but the building is old and maintenance can be slow. It's not the best place to live, but it works if you're on a tight budget."
  },
  {
    id: 11,
    apartmentId: 5,
    user: "Karen Anderson",
    rating: 3,
    date: "2026-02-05",
    text: "I have mixed feelings about Southpoint Apartments. The rent is affordable and the location is decent, but the building is old and there are some maintenance issues. It's a trade-off."
  },
  {
    id: 12,
    apartmentId: 5,
    user: "Leo Thomas",
    rating: 2,
    date: "2026-03-01",
    text: "Southpoint Apartments is not the best place to live. The building is old and there are frequent maintenance issues. It's cheap, but you get what you pay for."
  },
  {
    id: 13,
    apartmentId: 5,
    user: "Mia Wilson",
    rating: 3, 
    date: "2026-03-15",
    text: "Southpoint Apartments is an okay place to live if you're on a tight budget. The rent is affordable and the location is decent, but the building is old and there are some maintenance issues."
  }
];