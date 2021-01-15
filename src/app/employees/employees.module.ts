import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { ViewComponent } from './view.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EmployeesRoutingModule,
        DataTablesModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        ViewComponent
    ]
})
export class EmployeesModule { }