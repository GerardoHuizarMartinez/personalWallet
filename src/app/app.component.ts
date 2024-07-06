import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkmodeService } from './services/darkmode.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SideNavbarComponent } from './component/side-navbar/side-navbar.component';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, SideNavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-wallet';

  darkModeService : DarkmodeService = inject(DarkmodeService);

  toggleMode(){
    this.darkModeService.changeMode();
  }


}
