import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss',
})
export class SearchPanelComponent {
  @Output() search = new EventEmitter<any>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      firstName: '',
      lastName: '',
      position: '',
      phone: '',
    });
  }

  onSubmit(): void {
    this.search.emit(this.searchForm.value);
  }

  onReset(): void {
    this.searchForm.reset();
    this.search.emit({});
  }
}
