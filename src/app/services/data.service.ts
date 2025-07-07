import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(params?: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
