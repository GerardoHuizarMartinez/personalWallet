import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { PurchasingComponent } from './component/purchasing/purchasing.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'purchases', component:PurchasingComponent},
    {path: '404PageNotFound', component:NotFoundComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: '**', redirectTo: '/404PageNotFound', pathMatch: 'full'}
];
