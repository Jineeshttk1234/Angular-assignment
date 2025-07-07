import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee.model';
import { DataService } from './services/data.service';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchPanelComponent, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  filteredData: Employee[] = [];
  constructor(private dataService: DataService) {}
  onSearch(filters: any) {
    this.dataService
      .getEmployees(filters)
      .pipe(
        map((employees: Employee[]) => {
          const { firstName, lastName, position, phone } = filters;

          return employees.filter((emp) => {
            const matchesFirstName =
              !firstName ||
              emp.firstName?.toLowerCase().includes(firstName.toLowerCase());
            const matchesLastName =
              !lastName ||
              emp.lastName?.toLowerCase().includes(lastName.toLowerCase());
            const matchesPosition =
              !position ||
              emp.position?.toLowerCase().includes(position.toLowerCase());
            const matchesPhone = !phone || emp.phone?.includes(phone);

            return (
              matchesFirstName &&
              matchesLastName &&
              matchesPosition &&
              matchesPhone
            );
          });
        })
      )
      .subscribe((data) => {
        this.filteredData = data;
      });
  }
}
