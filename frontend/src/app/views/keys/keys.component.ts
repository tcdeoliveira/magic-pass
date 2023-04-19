import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit{

  shouldShowAddNewItemPopUp = new BehaviorSubject(false);
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
  
  ngOnInit(): void {
    this.shouldShowAddNewItemPopUp$ = this.shouldShowAddNewItemPopUp.asObservable();
  }
}