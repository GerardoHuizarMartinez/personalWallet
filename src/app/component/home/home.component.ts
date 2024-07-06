import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
