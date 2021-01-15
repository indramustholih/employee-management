import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';

import { EmployeeService, AlertService } from '@app/_services';
import { Employee } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    employees!: Employee[];
    data:any;
    dtOptions: any = {};

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.employeeService.getAll()
            .pipe(first())
            .subscribe(employees => {this.employees = employees
                setTimeout(()=>{                          
                    $('#datatableexample').DataTable( {
                      pagingType: 'full_numbers',
                      pageLength: 10,
                      processing: true,
                      lengthMenu : [10, 25, 50],
                    //   order:[[0,"desc"]]
                  } );
                  }, 1);
            });
        
        // setTimeout(()=>{                          
        //     $('#datatableexample').DataTable( {
        //         pagingType: 'full_numbers',
        //         pageLength: 5,
        //         processing: true,
        //         lengthMenu : [5, 10, 25],
        //         order:[[1,"desc"]]
        //     } );
        //     }, 1);
    }

    deleteEmployee(id: string) {
        const employee = this.employees.find(x => x.id === id);
        if (!employee) return;
        employee.isDeleting = true;
        this.employeeService.delete(id)
            .pipe(first())
            .subscribe(() => this.employees = this.employees.filter(x => x.id !== id));
            this.alertService.error('Employee has been deleted', { keepAfterRouteChange: true });
            this.router.navigateByUrl('employees');
    }
}