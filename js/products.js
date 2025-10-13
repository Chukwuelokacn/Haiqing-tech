// js/products.js
const products = [
  {
    id: 1,
    name: "MF014-4",
    category: "Fans",
    price: "4,900",
    oldPrice: "8,000",
    discount: "25%",
    promo: true,
    image: "images/MF014-4.jpg",
    extraImages: ["images/MF014-4.jpg", "images/MF014-4.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>Stay cool and refreshed anywhere with the <strong>LONTOR Mini Fan 014-4</strong>.
      Compact, quiet, and powerful — perfect for home, office, or travel. Enjoy comfort on the go.</p>
    `,
    userGuide: `<p>Charge fully before use and keep away from water.</p>`,
    parameters: {
      "Battery Capacity": "2400mAh",
      "Speed Level": "3",
      "Brand": "LONTOR"
    }
  },
  {
    id: 2,
    name: "OL149U",
    category: "Light",
    price: "6,600",
    oldPrice: "9,900",
    promo: false,
    image: "images/OL149U.jpg",
    extraImages: ["images/OL149U.jpg", "images/OL149U.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>This <strong>2.5KVA inverter system</strong> is ideal for homes and small offices.</p>
    `,
    parameters: {
      "Battery Type": "Tubular",
      "Power": "2.5KVA",
      "Brand": "HC Tech"
    }
  },
  
  {
    id: 3,
    name: "MF011",
    category: "Fan",
    price: "4,600",
    oldPrice: "7,900",
    promo: false,
    image: "images/MF011.jpg",
    extraImages: ["images/MF011.jpg", "images/MF011.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>This <strong>2.5KVA inverter system</strong> is ideal for homes and small offices.</p>
    `,
    parameters: {
      "Battery Type": "Tubular",
      "Power": "2.5KVA",
      "Brand": "HC Tech"
    }
  },
   {
    id: 4,
    name: "CF011",
    price: "30,000",
    oldPrice: "38,500",
    discount: "25%",
    Category: "Fan",
    promo: true,
    image: "images/CF11.jpg",
    extraImages: ["images/CF11.jpg", "images/CF11.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },
  
  {
    id: 5,
    name: "BL003",
    price: "60,000",
    oldPrice: "78,000",
    discount: "25%",
    Category: "Home Appliance",
    promo: true,
    image: "images/BL003.jpg",
    extraImages: ["images/BL003.jpg", "images/BL003.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },

  {
    id: 6,
    name: "MF037-4",
    price: "9,000",
    oldPrice: "12,500",
    discount: "25%",
    Category: "Fan",
    promo: true,
    image: "images/MF11.jpg",
    extraImages: ["images/MF11.jpg", "images/MF11.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },
  {
    id: 7,
    name: "AF001D-5",
    price: "55,000",
    oldPrice: "73,800",
    discount: "25%",
    Category: "Home Appliance",
    promo: true,
    image: "images/AF001 D-5.jpg",
    extraImages: ["images/AF001 D-5.jpg", "images/AF001 D-5.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },

    {
    id: 8,
    name: "AF002D-8",
    price: "55,000",
    oldPrice: "73,800",
    discount: "25%",
    Category: "Home Appliance",
    promo: true,
    image: "images/AF001 D-5.jpg",
    extraImages: ["images/AF002 D-8.jpg", "images/AF002 D-8.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },

     {
    id: 9,
    name: "EK006",
    price: "18,000",
    oldPrice: "24,000",
    discount: "25%",
    Category: "Home Appliance",
    promo: true,
    image: "images/EK006.jpg",
    extraImages: ["images/EK006.jpg", "images/EK006.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },

       {
    id: 10,
    name: "SLK005",
    price: "9,500",
    oldPrice: "18,000",
    discount: "25%",
    Category: "Solar",
    promo: true,
    image: "images/SL11.jpg",
    extraImages: ["images/SL11.jpg", "images/SL11.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },

   {
    id: 11,
    name: "SM001 Stand mixer",
    price: "80,000",
    oldPrice: "105,000",
    discount: "25%",
    Category: "Home Appliance",
    promo: true,
    image: "images/SM001.jpg",
    extraImages: ["images/SM001.jpg", "images/SM001.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },

  {
    id: 12,
    name: "SM002 Stand mixer",
    price: "110,500",
    oldPrice: "140,000",
    discount: "25%",
    Category: "Home Appliance",
    promo: true,
    image: "images/SM002.jpg",
    extraImages: ["images/SM002.jpg", "images/SM002.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },

    {
    id: 13,
    name: "Wall fan",
    price: "66,000",
    oldPrice: "89,000",
    discount: "25%",
    Category: "Fan",
    promo: true,
    image: "images/Wall fan 11.jpg",
    extraImages: ["images/Wall fan 11.jpg", "images/Wall fan 11.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },

   {
    id: 14,
    name: "MF032",
    price: "14,000",
    oldPrice: "19,000",
    discount: "25%",
    Category: "Light",
    promo: true,
    image: "images/MF032.jpg",
    extraImages: ["images/MF032.jpg", "images/MF032.jpg"],
    video: "https://www.youtube.com/embed/ZoyvvdwPACk",
    description: `
      <p>The <strong>3.5KVA Hybrid Solar Inverter</strong> offers seamless switching between
      solar and grid power. Designed for efficient energy management and longevity.</p>`,
    userGuide: `
      <p>Install in a well-ventilated area.</p>
      <p>Keep panels clean for maximum solar efficiency.</p>
    `,
    parameters: {
      "System Type": "Hybrid Solar Inverter",
      "Power Output": "3.5KVA",
      "Battery Compatibility": "Lithium / Tubular",
      "Efficiency": "95%",
      "Input Voltage": "24V DC",
      "Output Voltage": "230V AC",
      "Color": "White, Silver",
      "Brand": "HC Tech"
    }
  },
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


