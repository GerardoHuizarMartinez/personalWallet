import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  //darkModeSignal = signal<string>('light');
  
  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('theme') ?? 'null')
  ) 
    
  changeMode(){
    this.darkModeSignal.update( (value) => (value === 'dark' ? 'null' : 'dark'));
  }

  constructor() { 
    effect(()=>{
      window.localStorage.setItem('theme', JSON.stringify(this.darkModeSignal()))
    });
  }
}
