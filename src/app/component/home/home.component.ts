import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent, NgxChartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  single = [
    {
      "name": "Ingresos",
      "value": 10047.38
    },
    {
      "name": "Gastos",
      "value": 9043.03
    },
    {
      "name": "Mes anterior",
      "value": 1500.00
    },
    {
      "name": "Tarjeta de debito",
      "value": 5043.53
    },
      {
      "name": "Tarjeta de credito",
      "value": 1278.10
    }
  ];
  view: [number, number] = [250, 190];

 //////////////////////////////////////////////////// options graph 1 ///////////////////////////////////////////////////////////////////
 gradient: boolean = false;
 showLegend: boolean = false;
 showLabels: boolean = false;
 isDoughnut: boolean = true;
 arcWidth: number = 0.50;
 legendPosition: string = 'right';

  colorScheme = {
    name: 'neons',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [      
      '#FF3333',
      '#FF33FF',
      '#CC33FF',
      '#0000FF',
      '#33CCFF',
      '#33FFFF',
      '#33FF66',
      '#CCFF33',
      '#FFCC00',
      '#FF6600']
  };


  //////////////////////////////////////////////////// options graph categories ///////////////////////////////////////////////////////////////////
  viewC: [number, number] = [400, 230];
  
  singleC = [
    {
      "name": "Ingresos",
      "value": 10047.38
    },
    {
      "name": "Gastos",
      "value": 9043.03
    },
    {
      "name": "Mes anterior",
      "value": 1500.00
    },
    {
      "name": "Tarjeta de debito",
      "value": 5043.53
    },
      {
      "name": "Tarjeta de credito",
      "value": 1278.10
    }
  ];

  gradientC: boolean = false;
  showLegendC: boolean = false;
  showLabelsC: boolean = false;
  isDoughnutC: boolean = true;
  arcWidthC: number = 0.50;
  legendPositionC: string = 'right';
 
   colorSchemeC = {
     name: 'neons',
     selectable: true,
     group: ScaleType.Ordinal,
     domain: [      
      '#a8385d',
      '#7aa3e5',
      '#a27ea8',
      '#aae3f5',
      '#adcded',
      '#a95963',
      '#8796c0',
      '#7ed3ed',
      '#50abcc',
      '#ad6886']
   };
  constructor() {
    //Object.assign(this, { single });
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
