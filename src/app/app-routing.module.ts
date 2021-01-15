import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';

const employeesModule = () => import('./employees/employees.module').then(x => x.EmployeesModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'login', component: LoginComponent },
    { path: 'employees', loadChildren: employeesModule },
    { 
        path: '', 
        component: LoginComponent,
        children: [
          { path: 'login', component: LoginComponent, pathMatch: 'full'}
        ]
    },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }