import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-pass-maker-popup',
  templateUrl: './password-maker-popup.component.html',
  styleUrls: ['./password-maker-popup.component.scss']
})
export class PasswordMakerPopupComponent {
  @Input() height: string | number = 100;
  @Input() width: string | number = 100;
  @Input() measurement: string = 'px';

  keyForm = this.fb.group({
    pass: ['', [Validators.min(4), Validators.max(255), passphraseValidator()]],
    passphrase: [1, [Validators.min(0), Validators.max(1)]],
    passphrase_words: [3, [Validators.min(3), Validators.max(7)]],
    passphrase_separetor: [1, [Validators.minLength(1), Validators.maxLength(1), Validators.min(1), Validators.max(4)]],
  });

  constructor(private fb: FormBuilder) { }

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
