import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UserProfile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import { EditableFieldComponent } from '../../shared/editable-field/editable-field.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    TranslateModule,
    EditableFieldComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    joinDate: new FormControl(''),
    address: new FormControl(''),
  });

  editing = false;
  // Almacena los valores originales para poder restaurarlos al cancelar
  private originalProfile: any;

  constructor(@Inject(ProfileService) private profileService: ProfileService) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile().subscribe((profile: UserProfile) => {
      this.profileForm.setValue(profile);
      // Guarda el estado inicial para poder restaurarlo
      this.originalProfile = profile;
    });
  }

  // Activa el modo edición y guarda los valores actuales
  startEditing() {
    this.originalProfile = this.profileForm.value;
    this.editing = true;
  }

  // Cancela la edición y restaura los valores originales
  cancelEditing() {
    this.profileForm.setValue(this.originalProfile);
    this.editing = false;
  }

  // Guarda los cambios el el backend simulado y sale del modo edición
  saveChanges() {
    this.profileService
      .updateProfile(this.profileForm.value as UserProfile)
      .subscribe(() => {
        this.editing = false;
        // Actualiza el estado original con los nuevos valores
        this.originalProfile = this.profileForm.value;
      });
  }
}
