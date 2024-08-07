import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HeaderComponent, RouterLink, SideNavbarComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
