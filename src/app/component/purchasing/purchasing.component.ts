import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter} from '@angular/material/core';
import { MatRadioModule} from '@angular/material/radio';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { AfterViewInit, ViewChild} from '@angular/core';
import { purchaseService } from '../../services/purchase.service';
import { Category } from '../../models/categories.interface';
import { OnInit } from '@angular/core';





  const FRUITS: string[] = [
    'blueberry',
    'lychee',
    'kiwi',
    'mango',
    'peach',
    'lime',
    'pomegranate',
    'pineapple',
  ];
  const NAMES: string[] = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
  ];


@Component({
  selector: 'app-purchasing',
  standalone: true,
  imports: [HeaderComponent,SideNavbarComponent,FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, 
            MatButtonModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatRadioModule,
            MatTableModule,MatPaginator, MatSortModule, MatPaginatorModule ],
  templateUrl: './purchasing.component.html',
  providers: provideNativeDateAdapter(),  
  styleUrl: './purchasing.component.css'
})

export class PurchasingComponent {

  displayedColumns: string[] = ['Mes', 'Concepto', 'FechaPago', 'Monto'];


  
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  formulario!: FormGroup;
  listOfCat : Category[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private purchaseService : purchaseService
  )
  { 
        // Create 100 users
        const users = Array.from({length: 15}, (_, k) => this.createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
        this.getAllCategories();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      fk_idUser: [ 1, Validators.required],
      purchaseDate: [, Validators.required ],
      productName: [, Validators.required],
      price: [, Validators.required],
      paymentMethod: [, Validators.required],
      typePurchase: [null, Validators.required],
      totalToPay: [null, Validators.required],
      paymentPerMonth: [null, Validators.required],
      dateToPay: [null, Validators.required],
      status: [, Validators.required],
      registrationDate: [, Validators.required],
      fk_idCategory: [ , Validators.required],
    });
  }


  getAllCategories() {
      this.purchaseService.getAllCategoriesServ().subscribe(
        data => { this.listOfCat = data;}
      )
  }

  registerPurchase(){
    console.log(this.formulario.value)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

   createNewUser(id: number){
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }



}
