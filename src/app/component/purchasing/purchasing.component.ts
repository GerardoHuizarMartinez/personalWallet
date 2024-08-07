import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {}

@Component({
  selector: 'app-purchasing',
  standalone: true,
  imports: [HeaderComponent,SideNavbarComponent,FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule ],
  templateUrl: './purchasing.component.html',
  styleUrl: './purchasing.component.css'
})
export class PurchasingComponent {
  
  formulario!: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ }
  
  ngOnInit(): void {
    // Creamos el formulario reactivo con los campos y validaciones
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern('[0-9]{10}')],
    });
  }


}
