import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = new BehaviorSubject<string>('');

  setData(data: string) {
    this.data.next(data);
  }
}
