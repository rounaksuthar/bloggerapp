import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-posts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

}
