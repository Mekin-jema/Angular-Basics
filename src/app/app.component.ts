import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AboutComponent } from './Common/default/about.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './Pipe-template/reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    AboutComponent,
    CommonModule,
    ReversePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Mekin Jemal';
  title = 'Angular 12';
  today: number = Date.now();
  salay: number = 1000;
  obj = {
    name: 'Mekin',
    age: 25, //how do you know my age exactly?
    address: 'Addis Ababa',
    country: 'Ethiopia',
  };
}
