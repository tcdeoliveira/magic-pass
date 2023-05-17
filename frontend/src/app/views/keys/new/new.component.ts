import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { PopUpComponentsModule } from '../../components/pop-up/pop-up-components.module';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  faWandMagicSparkles = faWandMagicSparkles
  shouldShowAddNewItemPopUp = new BehaviorSubject(true);
  shouldShowAddNewItemPopUp$: Observable<boolean> | undefined;
  addNewPopUpFooterActions = {
    cancel:true,
    save:true
  }

  keyForm = this.fb.group({
    name: [''],
    password: [''],
    url: [''],
    notes: ['']
  }); 


  constructor(private fb: FormBuilder) { }

  /**
   * This function will handler the the AddNewItem pop-up
   * It will set 'false' to the pop-up observable when the close button was clicked
   * @returns void
   */
  closeAddItemPopUp(): void{
    this.shouldShowAddNewItemPopUp.next(false);
  }
  
  /**
   * This function will handler the the AddNewItem pop-up
   * It will set 'true' to the pop-up observable "New" button was clicked
   * @returns void
   */
  openAddItemPopUp(): void{
    this.shouldShowAddNewItemPopUp.next(true);
  }

  magicPass(){

  }
  
  ngOnInit(): void {
    this.shouldShowAddNewItemPopUp$ = this.shouldShowAddNewItemPopUp.asObservable();
  }
}


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    //Angular Material Modules
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    PopUpComponentsModule,
  ],
  exports: [
  ]
})
export class NewModule { }