import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  @Input() data: Employee[] = [];
}
