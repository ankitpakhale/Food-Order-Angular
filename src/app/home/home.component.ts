import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
// import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Foods[] = [];

  constructor(private fs: FoodService) {
  }

  ngOnInit() {
    this.foods = this.fs.getAll(); // getAll function is defined in food service
  }

}
