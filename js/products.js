// js/products.js
const products = [
  {
    id: 1,
    name: "LONTOR Mini Fan 014-4",
    price: "4,900",
    oldPrice: "8,000",
    discount: "25%",
    image: "images/HCT Packs (1).jpeg",
    extraImages: [
      "images/HCT Packs (2).jpeg",
      "images/HCT Packs (3).jpeg",
    ],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: "<p>Welcome to Buy now and get 25% discount, I will contine to push until i succeed. GOD cannot be mocked  Whatever a man sow that he shall reap, Amen ",
    parameters: {
    "Bluetooth Version": "V5.4",
    "Playtime": "30 Hours",
    "Charging Time": "2 Hours",
    "Driver Size": "10mm",
    "Transmission Distance": "10m",
    "Waterproof": "IPX4",
    "Material": "PC + ABS",
    "Color": "Speed Black, Mystery Blue, Green, Light Gold",
    "Model Name": "OTW-323",
    "Market Name": "SpaceBuds Neo"
  }
  },

  {
    id: 2,
    name: "2.5KVA + Tubular battery",
    price: "1,750,000",
    oldPrice: "2,330,000",
    discount: "25%",
    image: "images/HCT Packs (2).jpeg",
    extraImages: [
      "images/HCT Packs (2a).jpeg"
    ],
    video: null,
    description: "Durable 2.5KVA inverter system with tubular battery, designed for reliability."
  },
  {
    id: 3,
    name: "3.5KVA Hybrid Solar Inverter",
    price: "2,450,000",
    oldPrice: "3,050,000",
    discount: "20%",
    image: "images/HCT Packs (3).jpeg",
    extraImages: [
      "images/HCT Packs (3a).jpeg",
      "images/HCT Packs (3b).jpeg"
    ],
    video: "videos/product3.mp4",
    description: "3.5KVA inverter with solar hybrid function, designed for long lasting energy."
  },
  {
    id: 4,
    name: "5KVA + Lithium Pro Pack",
    price: "4,850,000",
    oldPrice: "5,300,000",
    discount: "10%",
    image: "images/HCT Packs (4).jpeg",
    extraImages: [],
    video: null,
    description: "Top-tier 5KVA inverter with lithium pro battery pack, high performance & durable."
  },
  {
    id: 5,
    name: "1KVA Compact System",
    price: "850,000",
    oldPrice: "1,050,000",
    discount: "15%",
    image: "images/HCT Packs (5).jpeg",
    extraImages: ["images/HCT Packs (5a).jpeg"],
    video: null,
    description: "Affordable and compact 1KVA inverter suitable for small homes and shops."
  },
  {
    id: 6,
    name: "Portable Power Station 500W",
    price: "320,000",
    oldPrice: "400,000",
    discount: "20%",
    image: "images/HCT Packs (6).jpeg",
    extraImages: [],
    video: "videos/product6.mp4",
    description: "Lightweight portable 500W inverter station for outdoor and travel."
  },
  {
    id: 7,
    name: "Solar Street Light 120W",
    price: "95,000",
    oldPrice: "120,000",
    discount: "21%",
    image: "images/HCT Packs (7).jpeg",
    extraImages: ["images/HCT Packs (7a).jpeg"],
    video: null,
    description: "Durable solar street light 120W with automatic sensor and long battery life."
  }
];

const infoDetails = {
  logistics: `
    <h5 class="text-center text-success fw-bold">Secure Logistics</h5>
    <p>Your shipments are safeguarded with trusted logistics partners ensuring secure and reliable delivery.</p>
    <p>Real-time logistics updates available.</p>
    <a href="#" class="text-success fw-semibold">Check My Order</a>
  `,
  warranty: `
    <h5 class="text-center text-success fw-bold">Warranty Policy</h5>
    <p>All products come with a 12-month warranty period covering manufacturing defects.</p>
    <p>Terms apply based on product category.</p>
  `,
  support: `
    <h5 class="text-center text-success fw-bold">Customer Support</h5>
    <p>We’re here to help you 24/7. Get quick resolutions for your inquiries and complaints.</p>
    <a href="#" class="text-success fw-semibold">Contact Support</a>
  `,
  payment: `
    <h5 class="text-center text-success fw-bold">Payment Methods</h5>
    <p>We accept bank transfers, cards, and mobile payment options for your convenience.</p>
  `,
  returns: `
    <h5 class="text-center text-success fw-bold">Returns & Refunds</h5>
    <p>Easy return within 7 days of delivery. Refunds are processed within 3–5 working days after verification.</p>
  `
};


