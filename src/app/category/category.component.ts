import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  template: `<app-category-view [childMessage] = "parentMessage"></app-category-view>`,
  standalone: true,
  imports: [NgFor],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  category:String[] = ['Art','History','Comics','Geography'];
  constructor(private router : Router, private dataService: DataService){
  }

  public selected(item : any){
    console.log(item+" from parent");
    this.dataService.setData(item);
    this.router.navigate(['/category_view']);
  }
}
