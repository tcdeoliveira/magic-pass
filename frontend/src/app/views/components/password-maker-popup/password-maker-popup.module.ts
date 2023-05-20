import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMakerPopupComponent } from './password-maker-popup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';



import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    PasswordMakerPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatDialogModule,
   // MatRadioModule,
    MatSliderModule
  ],
  exports: [
    PasswordMakerPopupComponent
  ],
  providers: []
})
export class PasswordMakerPopupModule { }
