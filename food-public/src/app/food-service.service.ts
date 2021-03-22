import { Injectable } from '@angular/core';
import { Food } from './food';
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  private foodsUrl = 'http://localhost:3000/api/foods';
  constructor(private http:HttpClient) { }

  getFoods() : Promise<void | Food[]>{
return this.http.get(this.foodsUrl)
.toPromise()
.then(response => response as Food[])
.catch(this.handleError);
  }

  private handleError(error: any){
    console.log("error");
  }

}
