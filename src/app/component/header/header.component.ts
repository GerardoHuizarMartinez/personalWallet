import { Component, inject } from '@angular/core';
import { DarkmodeService } from '../../services/darkmode.service';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SideNavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  darkModeService : DarkmodeService = inject(DarkmodeService);
  flagMenu:boolean = false;

  ngOnInit(): void {
    //this.toggleMenu()
  }

  toggleMode(){
    this.darkModeService.changeMode();
  }

  toggleMenu(){
    this.flagMenu = !this.flagMenu;
    let a = document.getElementById("mainMenu")
     a?.classList.toggle("z-40")
     a?.classList.toggle("transition-transform")
     a?.classList.toggle("-translate-x-full")
     
  }

}
