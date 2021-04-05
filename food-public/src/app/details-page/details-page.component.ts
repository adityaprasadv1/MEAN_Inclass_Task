import { Food } from '../food';
import { FoodServiceService } from '../food-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers:[FoodServiceService]
})

export class DetailsPageComponent implements OnInit {

  constructor(private foodService: FoodServiceService, private route: ActivatedRoute) { }

  newFood: Food;
  pageContent = {
    header: {
      title: '',
      body: ''
    }
  }
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.foodService.getSingleFood(params.foodid);
    }))
    .subscribe((newFood: Food) => {
      console.log('SelectedFood', newFood);
      this.newFood = newFood;
      this.pageContent.header.title = newFood.name;
      this.pageContent.header.body = 'Details for selected Food.';
    });
  }
}
