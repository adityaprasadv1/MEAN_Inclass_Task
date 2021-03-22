import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodServiceService} from "../food-service.service";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [FoodServiceService]

})
export class HomeListComponent implements OnInit {

  foods: Food[]

  constructor( private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.foodService
    .getFoods()
    .then((foods: Food[])=>{
      this.foods = foods.map(food =>{
        return food;
      })
    })
  }

}
