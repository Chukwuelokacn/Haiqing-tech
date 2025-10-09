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
    description: `
      <p>Stay cool and refreshed anywhere with the <strong>LONTOR Mini Fan 014-4</strong>.
      Compact, quiet, and powerful — perfect for home, office, or travel. Enjoy comfort on the go.</p>
      <ul>
        <li>Rechargeable with long-lasting battery life</li>
        <li>Portable, lightweight, and silent motor</li>
        <li>3-speed levels for flexible airflow</li>
      </ul>
    `,
    userGuide: `
      <h6>How to Use:</h6>
      <ol>
        <li>Charge the fan fully before first use.</li>
        <li>Press the power button to toggle speed levels.</li>
        <li>Use USB cable to recharge when low.</li>
      </ol>
      <p>Always keep away from water and heat sources.</p>
    `,
    parameters: {
      "Battery Capacity": "2400mAh",
      "Charging Time": "2 Hours",
      "Usage Time": "5-8 Hours",
      "Speed Level": "3",
      "Power Input": "DC 5V/1A",
      "Material": "PC + ABS",
      "Color": "White, Blue, Black",
      "Model Name": "014-4",
      "Brand": "LONTOR"
    }
  },

  {
    id: 2,
    name: "2.5KVA + Tubular Battery",
    price: "1,750,000",
    oldPrice: "2,330,000",
    discount: "25%",
    image: "images/HCT Packs (2).jpeg",
    extraImages: ["images/HCT Packs (2a).jpeg"],
    video: null,
    description: `
      <p>This <strong>2.5KVA inverter system</strong> comes with a tubular battery pack for 
      long-lasting, reliable power. Ideal for homes and small offices.</p>`,
    userGuide: `
      <p>Ensure battery water levels are checked monthly.</p>
      <p>Do not connect appliances exceeding 2.5KVA load capacity.</p>
    `,
    parameters: {
      "Battery Type": "Tubular Battery",
      "Power Rating": "2.5KVA",
      "Input Voltage": "12V DC",
      "Output Voltage": "220V AC",
      "Backup Time": "6-10 Hours",
      "Warranty": "12 Months",
      "Color": "Grey, Blue",
      "Brand": "HC Tech"
    }
  },

  {
    id: 3,
    name: "3.5KVA Hybrid Solar Inverter",
    price: "2,450,000",
    oldPrice: "3,050,000",
    discount: "20%",
    image: "images/HCT Packs (3).jpeg",
    extraImages: ["images/HCT Packs (3a).jpeg", "images/HCT Packs (3b).jpeg"],
    video: "videos/product3.mp4",
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
    id: 4,
    name: "3.5KVA Hybrid Solar Inverter",
    price: "2,450,000",
    oldPrice: "3,050,000",
    discount: "20%",
    image: "images/HCT Packs (3).jpeg",
    extraImages: ["images/HCT Packs (3a).jpeg", "images/HCT Packs (3b).jpeg"],
    video: "videos/product3.mp4",
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
    name: "3.5KVA Hybrid Solar Inverter",
    price: "2,450,000",
    oldPrice: "3,050,000",
    discount: "20%",
    image: "images/HCT Packs (3).jpeg",
    extraImages: ["images/HCT Packs (3a).jpeg", "images/HCT Packs (3b).jpeg"],
    video: "videos/product3.mp4",
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


