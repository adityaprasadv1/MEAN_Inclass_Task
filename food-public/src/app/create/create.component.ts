import { Component, OnInit } from '@angular/core';

import { FoodServiceService } from '../food-service.service';
import { Food } from '../food';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [FoodServiceService]
})
export class CreateComponent implements OnInit {

  public newFood: Food = {
    _id: '',
    name: '',
    type: ''
  };

  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
  }

  public createNewFood(newFood: Food): void {
    this.foodService.createFood(newFood);
  }

}
