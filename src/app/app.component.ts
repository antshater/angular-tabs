import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  label = 'Tab 1';

  ngOnInit(): void {
    interval(1000).subscribe(() => this.label += '!');
  }

}
