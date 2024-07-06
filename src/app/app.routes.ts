import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    //{path: "experience", component: }
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
