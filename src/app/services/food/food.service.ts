import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 5.99,
        name: "Sandwich",
        favorites: false,
        star: 0,
        tags: ["snack", "breakfast"],
        imageUrl: '/assets/food-1.jpg',
        cookTime: "15 minutes",
        origins: ["Western cuisine"]
      },
      {
        id: 2,
        price: 6.49,
        name: "Burger",
        favorites: false,
        star: 0,
        tags: ["fast food", "lunch", "dinner"],
        imageUrl: '/assets/food-2.jpg',
        cookTime: "20 minutes",
        origins: ["American cuisine"]
      },
      {
        id: 3,
        price: 8.99,
        name: "Pizza",
        favorites: false,
        star: 0,
        tags: ["fast food", "dinner", "party"],
        imageUrl: '/assets/food-3.jpg',
        cookTime: "25 minutes",
        origins: ["Italian cuisine"]
      },
      {
        id: 4,
        price: 7.99,
        name: "Dal Fry",
        favorites: false,
        star: 0,
        tags: ["lunch", "dinner"],
        imageUrl: '/assets/food-4.jpg',
        cookTime: "30 minutes",
        origins: ["Indian cuisine"]
      },
      {
        id: 5,
        price: 9.99,
        name: "Paneer Tikka",
        favorites: false,
        star: 0,
        tags: ["appetizer", "Indian"],
        imageUrl: '/assets/food-5.jpg',
        cookTime: "40 minutes",
        origins: ["Indian cuisine"]
      },
      {
        id: 6,
        price: 10.99,
        name: "Rice Rolls",
        favorites: false,
        star: 0,
        tags: ["snack", "lunch"],
        imageUrl: '/assets/food-6.jpg',
        cookTime: "20 minutes",
        origins: ["Asian cuisine"]
      }
    ];

  }

}
