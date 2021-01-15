import { Role } from './role';

export class Employee {
    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    role!: Role;
    isDeleting: boolean = false;

    //tambahan
    username!: string;
    birthDate!: string;
    basicSalary!: number;
    status!: string;
    group!:string;
    description!:string;
}