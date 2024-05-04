import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDetailComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ecommerce-demo';
}
