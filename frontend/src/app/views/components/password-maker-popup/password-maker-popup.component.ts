import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, ValidationErrors, ValidatorFn, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pass-maker-popup',
  templateUrl: './password-maker-popup.component.html',
  styleUrls: ['./password-maker-popup.component.scss']
})
export class PasswordMakerPopupComponent implements OnInit{
  @Input() height: string | number = 100;
  @Input() width: string | number = 100;
  @Input() measurement: string = 'px';
  separetor = '$';
  wordsArray:string[]=[];
  keyForm!: FormGroup<any>;
  separetors = [
    '', '_', '-', '.', ';'
  ]

  constructor(private fb: FormBuilder, private _httpClient:HttpClient) { }

  ngOnInit() {
    this._loadWords();
    this.keyForm = this.fb.group({
      pass: ['', [Validators.min(4), Validators.max(255), passphraseValidator()]],
      passphrase: [1, [Validators.min(0), Validators.max(1)]],
      upperCaseFirstLetter: [0, [Validators.min(0), Validators.max(1)]],
      upperCaseLastLetter: [0, [Validators.min(0), Validators.max(1)]],
      passphrase_words: [3, [Validators.min(3), Validators.max(7)]],
      passphrase_separetor: [1, [Validators.minLength(1), Validators.maxLength(1), Validators.min(1), Validators.max(4)]],
    });
    this.keyForm.valueChanges
    .subscribe( async(data)=>{
      const pass = await this.makePass();
      this.keyForm.get('pass')?.setValue(pass, {emitEvent: false});
      console.log('form value: ', this.keyForm);
    });
  }
    
  private async makePass(data:any = null) {
    const separetor = await this._getSeparetor();
    const pass = await this._getWords(this.keyForm.get('passphrase_words')?.value)
    return pass.toString().replaceAll(',', this.separetors[separetor]);
  } 

  private async _getSeparetor(){
    return this.keyForm.get('passphrase_separetor')?.value;
  }

  private async _getRandonIndex(): Promise<number>{
    var index: number = -1;
    const min = 0;
    const max = this.wordsArray?.length ?? 1000;
    index = Math.floor(Math.random() * (max - min +1) + min);
    return index;
  }

  private async _getWords(wordsToGet  = 1):Promise<string[]> {
    const words: string[] = [];
    for(let got = 0; got < wordsToGet; got++){
      words.push(this.wordsArray[await this._getRandonIndex()]);
    }
    console.log('words: ', words)
    return words;
  }

  private _upperCaseFirstLetter(pass:string): string{

    const arrayPass = [];
    return pass;
  }

  private _upperCaseLastLetter(pass:string): string{
    return pass;
  }

  private _loadWords():void{
    try {
      this._httpClient.get('assets/words.txt', {headers: {}, responseType:'text'})
      .subscribe(data=>{
        this.wordsArray=data.split('\n'); 
        console.table(this.wordsArray?.length); 
      });
    } catch (error) {
      throw error;
    }
  }

}

export function passphraseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passphraseValue: string = control.value;
    const words: string[] = passphraseValue.split(/[,\-_\.]/).filter(Boolean);

    const passphraseWordsControl = control.root.get('passphrase_words');
    const maxWords = passphraseWordsControl?.value || 3;

    if (passphraseWordsControl?.value === 1 && (words.length < 3 || words.length > maxWords)) {
      return {
        invalidPassphrase: {
          requiredWords: 3,
          maxWords: maxWords
        }
      };
    }

    return null;
  };
}

export function passphraseSeparetorValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validCharacters = [',', '.', '-', '_'];
    const value = control.value;

    if (value && !validCharacters.includes(value)) {
      return { 'invalidCharacters': true };
    }

    return null;
  };
} 