import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';


import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {AsyncPipe} from '@angular/common';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { getDomain } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-register-new-user',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule],
    templateUrl: './register-new-user.component.html',
    styleUrl: './register-new-user.component.css'
  })
  export class RegisterNewUserComponent {
    
    stepperOrientation: Observable<StepperOrientation>;
    alto: number = window.innerHeight;
    ancho: number = window.innerWidth;
    confPass  = false;
    pass1 = false;

  constructor(private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,) {
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 768px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    this.actualizarDimensiones();
  }


  shwPass(): boolean{ 
    return this.pass1 = !this.pass1;
  }
 
  shwConf(): boolean{ 
    return this.confPass = !this.confPass;
  }
    

  actualizarDimensiones(): void {
    this.ancho = window.innerWidth
    this.alto = window.innerHeight
    window.addEventListener("onmousemove", this.actualizarDimensiones);
  }
   
  gender = ["Masculino", "Femenino"];

  userFormGroup = this._formBuilder.group({
    name: [, Validators.required], 
    lastname: [, Validators.required],
    birthday : [, Validators.required],
    gender: [, Validators.required],
    telephone : [null, ],
    country : [, Validators.required],
    postalCode : [null, ],
    state : [, Validators.required],
    municipality : [, Validators.required],
    colony  : [, Validators.required],
    address : [, Validators.required],
    urlImage  : [, Validators.required],
    email  : [, Validators.required],
    password  : [, Validators.required],
    passwordConfirm: [ , Validators.required],
    registrationDate: [null, ]

  });

  printData(){
    console.log(this.userFormGroup.value)
    //console.log(this.userFormGroup.value.name)
    //console.log(this.userFormGroup.value.lastname)
  }

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    fourCtrl: ['', Validators.required],
  });




}

