import hummus from "./assets/menu/hummus.png";
import lambKebab from "./assets/menu/lamb-kebab.png";
import shawarma from "./assets/menu/shawarma.png";
import branzino from "./assets/menu/branzino.png";
import baklava from "./assets/menu/baklava.png";
import mintLemonade from "./assets/menu/mint-lemonade.png";
import greekSalad from "./assets/greek-salad.png";
import bruschetta from "./assets/bruschetta.png";

export const menuData = [
  {
    category: "Starters",
    items: [
      { id: 1, name: "Hummus & Pita", price: 8.99, image: hummus, description: "Creamy chickpea hummus, warm pita, drizzle of olive oil." },
      { id: 2, name: "Bruschetta", price: 5.99, image: bruschetta, description: "Grilled bread topped with garlic, tomato, and fresh basil." },
      { id: 3, name: "Greek Salad", price: 12.99, image: greekSalad, description: "Crisp lettuce, peppers, olives, and feta with house dressing." },
    ],
  },
  {
    category: "Mains",
    items: [
      { id: 4, name: "Grilled Lamb Kebab", price: 21.99, image: lambKebab, description: "Charcoal-grilled skewers marinated in herbs and spices." },
      { id: 5, name: "Chicken Shawarma Plate", price: 17.99, image: shawarma, description: "Slow-roasted chicken, rice, and garlic sauce." },
      { id: 6, name: "Grilled Branzino", price: 24.99, image: branzino, description: "Whole Mediterranean sea bass, lemon, and herbs." },
    ],
  },
  {
    category: "Desserts",
    items: [
      { id: 7, name: "Baklava", price: 6.99, image: baklava, description: "Layered filo pastry, walnuts, and honey syrup." },
    ],
  },
  {
    category: "Drinks",
    items: [
      { id: 8, name: "Mint Lemonade", price: 4.99, image: mintLemonade, description: "Fresh-squeezed lemonade with muddled mint." },
    ],
  },
];