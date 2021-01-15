import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

import { Role } from '@app/_models';

// array in local storage for registered employees
const employeesKey = 'employee-management';
const employeesJSON = localStorage.getItem(employeesKey);
let employees: any[] = employeesJSON ? JSON.parse(employeesJSON) : [{
    id: 1,
    firstName: 'Udin',
    lastName: 'S',
    email: 'udin@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: ''

},{
    id: 2,
    firstName: 'Asep',
    lastName: 'Mulyadi',
    email: 'asep@gmail.com',
    role: Role.Commercial,
    password: '',
    username!   : 'asep',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Commercial,
    description!: '-'

},{
    id: 3,
    firstName: 'Mulyadi',
    lastName: '',
    email: 'mulyadi@gmail.com',
    role: Role.FrontOffice,
    password: 'mulyadi',
    username!   : 'mulyadi',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.FrontOffice,
    description!: '-'

},{
    id: 4,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 5,
    firstName: 'Sukijem',
    lastName: 'sukijem',
    email: 'sukijem@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'sukijem',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 6,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 7,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 8,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 9,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 10,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 11,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 12,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 13,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 14,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 15,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 16,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 17,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 18,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 19,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 20,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 21,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 22,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 23,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 24,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 25,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 26,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 27,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 28,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 29,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 30,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 31,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 32,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 33,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 34,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 35,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 36,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 37,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 38,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 39,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 40,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 41,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 42,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 43,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 44,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 45,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 46,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 47,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 48,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 49,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 50,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 51,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 52,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 53,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 54,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 55,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 56,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 57,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 58,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 59,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 60,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 61,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 62,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 63,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 64,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 65,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 66,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 67,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 68,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},{
    id: 69,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 70,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 71,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 72,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 73,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 74,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 75,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 76,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 77,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 78,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 79,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 80,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 81,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 82,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 83,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 84,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 85,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 86,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 87,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 88,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Production,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Production,
    description!: '-'

},
{
    id: 89,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Finance,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 90,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.Production,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Production,
    description!: '-'

},
{
    id: 91,
    firstName: 'Ujang',
    lastName: 'ujang',
    email: 'Ujang@gmail.com',
    role: Role.InformationTechnology,
    password: 'Ujang123',
    username!   : 'Ujang',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.InformationTechnology,
    description!: '-'

},
{
    id: 92,
    firstName: 'Rani',
    lastName: '',
    email: 'rani@gmail.com',
    role: Role.InformationTechnology,
    password: '',
    username!   : 'rani',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.InformationTechnology,
    description!: '-'

},
{
    id: 93,
    firstName: 'Rian',
    lastName: 'sulanja',
    email: 'rian@gmail.com',
    role: Role.Finance,
    password: 'rian',
    username!   : 'rian',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 94,
    firstName: 'Tria',
    lastName: '',
    email: 'tria@gmail.com',
    role: Role.Finance,
    password: 'tria',
    username!   : 'tria',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Finance,
    description!: '-'

},
{
    id: 95,
    firstName: 'Reno',
    lastName: '',
    email: 'reno@gmail.com',
    role: Role.InformationTechnology,
    password: 'reno',
    username!   : 'reno',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.InformationTechnology,
    description!: '-'

},
{
    id: 96,
    firstName: 'Wawan',
    lastName: '',
    email: 'wawan@gmail.com',
    role: Role.InformationTechnology,
    password: 'wawan',
    username!   : 'Wawan',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.InformationTechnology,
    description!: '-'

},
{
    id: 97,
    firstName: 'Asep',
    lastName: 'Sunarya',
    email: 'sunarya@gmail.com',
    role: Role.HumanResource,
    password: 'sunarya',
    username!   : 'sunarya',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.HumanResource,
    description!: '-'

},
{
    id: 98,
    firstName: 'Alex',
    lastName: '',
    email: 'alex@gmail.com',
    role: Role.HumanResource,
    password: 'alex',
    username!   : 'alex',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.HumanResource,
    description!: '-'

},
{
    id: 99,
    firstName: 'Rohman',
    lastName: 'rohman',
    email: 'rohman@gmail.com',
    role: Role.FrontOffice,
    password: 'Rohman',
    username!   : 'Rohman',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.FrontOffice,
    description!: ''

},
{
    id: 100,
    firstName: 'Mamat',
    lastName: 'mamat',
    email: 'mamat@gmail.com',
    role: Role.Marketing,
    password: 'mamat',
    username!   : 'mamat',
    birthDate!  : '1994-01-01',
    basicSalary!: 4500000,
    status!     : '',
    group!      : Role.Marketing,
    description!: '-'

}
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/employees') && method === 'GET':
                    return getEmployees();
                case url.match(/\/employees\/\d+$/) && method === 'GET':
                    return getEmployeeById();
                case url.endsWith('/employees') && method === 'POST':
                    return createEmployee();
                case url.match(/\/employees\/\d+$/) && method === 'PUT':
                    return updateEmployee();
                case url.match(/\/employees\/\d+$/) && method === 'DELETE':
                    return deleteEmployee();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function getEmployees() {
            return ok(employees.map(x => basicDetails(x)));
        }

        function getEmployeeById() {
            const employee = employees.find(x => x.id === idFromUrl());
            return ok(basicDetails(employee));
        }

        function createEmployee() {
            const employee = body;

            if (employees.find(x => x.email === employee.email)) {
                return error(`Employee with the email ${employee.email} already exists`);
            }

            // assign employee id and a few other properties then save
            employee.id = newEmployeeId();
            delete employee.confirmPassword;
            employees.push(employee);
            localStorage.setItem(employeesKey, JSON.stringify(employees));

            return ok();
        }

        function updateEmployee() {
            let params = body;
            let employee = employees.find(x => x.id === idFromUrl());

            if (params.email !== employee.email && employees.find(x => x.email === params.email)) {
                return error(`Employee with the email ${params.email} already exists`);
            }

            // only update password if entered
            if (!params.password) {
                delete params.password;
            }

            // update and save employee
            Object.assign(employee, params);
            localStorage.setItem(employeesKey, JSON.stringify(employees));

            return ok();
        }

        function deleteEmployee() {
            employees = employees.filter(x => x.id !== idFromUrl());
            localStorage.setItem(employeesKey, JSON.stringify(employees));
            return ok();
        }

        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); // delay observable to simulate server api call
        }

        function error(message: any) {
            return throwError({ error: { message } })
                .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }

        function basicDetails(employee: any) {
            const { id, firstName, lastName, email, role, username, birthDate, basicSalary, status, group, description } = employee;
            return { id, firstName, lastName, email, role, username, birthDate, basicSalary, status, group, description };
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }

        function newEmployeeId() {
            return employees.length ? Math.max(...employees.map(x => x.id)) + 1 : 1;
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};