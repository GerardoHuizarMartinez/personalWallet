import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScaleType } from '@swimlane/ngx-charts';
import { purchaseService } from '../../services/purchase.service';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent, MatIcon, MatTableModule, NgxChartsModule,  MatTooltipModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  today: DatePipe = new DatePipe('es-MX');
  curDate = new Date();
  purchases: any[] = [];
  categories : any = [];
  
  summary : any = [];
  totalCategories : number = 0;
 // displayedColumns: string[] = ['indice', 'date', 'method', 'details', 'price','actions'];
  
  constructor(
    private purchaseService : purchaseService,
   ) {
    registerLocaleData(localeEsMx);
  }
  ngOnInit() {
    this.updateDataOnScreen();
  }

  updateDataOnScreen(){
    this.getPurchasesByUser();
    this.getSummaryByUser();
    this.getCategoriesByUser();
  }


  async getPurchasesByUser (){
    this.purchaseService.getAllPurchaseServ().subscribe(
      res => {
        this.purchases = res;
      }
    )
  }

  async getCategoriesByUser(){
    this.purchaseService.getAllCategoriesServ().subscribe(
      res => {
        this.categories = res;
        this.totalByCategories();
      }
    )
  }

  async getSummaryByUser(){
    this.purchaseService.getSummaryPerMonthServ().subscribe(
      res => {
        this.summary = res;
      }
    )
  }
  
  async totalByCategories(){
    this.totalCategories = 0 ;
    this.categories.forEach((cat : {value:number}) => {
      this.totalCategories += cat.value
    });
  }

  async deletepurchase(idPurchase : number){
   
    this.purchaseService.deletePurchaseServ(idPurchase , "Cancelado").subscribe(() => {
      this.updateDataOnScreen();
    });
  
  }

  
  single = [
    {
      "name": "Ingresos",
      "value": 10047.38
    },
    {
      "name": "Gastos",
      "value": this.totalCategories
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
  view: [number, number] = [250, 130];

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
    domain:
  [
    
    "#007FFF",  // Azul
      "#FF7F00",  // Naranja
      "#FFFF00",  // Amarillo
      "#00FF00",  // Verde
      "#00FFFF",  // Cian
      "#FF0000",  // Rojo
      "#00FF7F",  // Verde aguamarina
  ]

  };


  //////////////////////////////////////////////////// options graph categories ///////////////////////////////////////////////////////////////////
  viewCategoriesInformation: [number, number] = [400, 230];
  
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
     domain:[
      "#FF0000",  // Rojo
      "#FF7F00",  // Naranja
      "#FFFF00",  // Amarillo
      "#7FFF00",  // Verde lima
      "#00FF00",  // Verde
      "#00FF7F",  // Verde aguamarina
      "#00FFFF",  // Cian
      "#007FFF",  // Azul
      "#0000FF",  // Azul intenso
      "#7F00FF",  // Violeta
      "#FF00FF",  // Magenta
      "#FF007F",  // Rosa
      "#FF6F61",  // Coral
      "#FF8C00",  // Naranja oscuro
      "#FFD700",  // Dorado
      "#FF1493",  // Rosa profundo
      "#FF69B4",  // Rosa brillante
      "#FF4500",  // Naranja rojizo
      "#FFB300",  // Amarillo cálido
      "#D50000",  // Rojo intenso
      "#C2185B"   // Rosa fuerte
    ]
    };



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
