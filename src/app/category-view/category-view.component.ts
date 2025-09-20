import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './category-view.component.html',
  styleUrl: './category-view.component.scss'
})
export class CategoryViewComponent implements OnInit{
  items: String='';
  // subscription: Subscription;
  textpost:all_posts[];
  selectedItem: any = null;

  constructor(private dataservice: DataService){
    
    // this.subscription = this.dataservice.data$.subscribe(data=>{
    //    console.log('Received data:', data);
    //    this.items=data;
    // })

    this.textpost=[
      {
        title:"Hello World",
        text:"Welcome to India",
        readmore:"you are welcome here"
      },
      {
        title:"Hello Death",
        text:"Welcome to pakistan",
        readmore:"you are not welcome here"
      },
      {
        title:"Hello Modi",
        text:"Welcome to China",
        readmore:"you are not welcome here"
      }
    ]

  }
  ngOnInit(): void {
    this.items = this.dataservice.data.value;
    console.log('Received data: ', this.items);
  }
  

  openModal(itemvalue: any){
    this.selectedItem=itemvalue;
    console.log(itemvalue);
  }

}


interface all_posts{
    title:string
    text:string
    readmore:string
}
