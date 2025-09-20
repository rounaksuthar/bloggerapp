import { Component } from '@angular/core';
import { PostsComponent } from "../posts/posts.component";
import { PostTextComponent } from "../post-text/post-text.component";
import { CategoryComponent } from "../category/category.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [PostsComponent, PostTextComponent, CategoryComponent,NgIf],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {
  activepost:number =1;
}
