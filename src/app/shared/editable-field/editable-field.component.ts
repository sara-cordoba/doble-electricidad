import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ReactiveFormsModule,
  FormGroupDirective,
  FormGroup,
  ControlContainer,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-field',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class EditableFieldComponent {
  @Input() label!: string;
  @Input() fieldName!: string;
  @Input() isEditable = true;
  // Indica si el campo está en modo edición
  @Input() isEditing = false;

  constructor(private formGroupDirective: FormGroupDirective) {}

  // Método para obtener el control del formulario
  get formGroup(): FormGroup {
    return this.formGroupDirective.form;
  }
}
