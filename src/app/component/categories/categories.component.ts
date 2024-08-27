import { Component } from '@angular/core';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {  MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgClass } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  highlighted?: boolean;
  hovered?: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ NgClass,FormsModule, ReactiveFormsModule, MatDatepickerModule,MatIconModule, MatInputModule, MatSelectModule, MatTableModule,HeaderComponent, SideNavbarComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  providers: [provideNativeDateAdapter()]
})
export class CategoriesComponent {

  highlight(element: PeriodicElement) {
    element.highlighted = !element.highlighted;
  }

  displayedColumns: string[] = ['Fecha', 'Categoria', 'Accion'];
  dataSource = ELEMENT_DATA;
  options = [
    {opt:"Gasto de la casa" },
    {opt:"NO"}
    
  ]

  formulario2! : FormGroup;

  constructor(private formBuilder: FormBuilder){
    
  }

  ngOnInit(): void {
    // Creamos el formulario reactivo con los campos y validaciones
    this.formulario2 = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern('[0-9]{10}')],
    });
  }

}
