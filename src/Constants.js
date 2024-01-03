import salad from "./assets/greek_salad.jpg";
import lemon_dessert from "./assets/lemon_dessert.jpg";

export const specials = [
  {
    image: salad,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    actionText: "Order a delivery",
  },
  {
    image: lemon_dessert,
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    actionText: "Order a delivery",
  },
  {
    image: lemon_dessert,
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    actionText: "Order a delivery",
  },
];
