import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';
  separetor = '$';
  wordsArray:string[]=[];
  constructor(httpClient:HttpClient){
    //httpClient.get('assets/words.txt', {headers: {}, responseType:'text'})
    //.subscribe((data:any) => { 
    //  this.wordsArray=data.split('\n'); console.table(this.wordsArray?.length)  
    //  var pass = this._getWords(10).toString().replaceAll(',', this.separetor);
    //  console.log(pass)
    //}
    //);
  }

  private _getRandonIndex(): number{
    var index: number = -1;
    const min = 0;
    const max = this.wordsArray?.length ?? 1000;
    index = Math.floor(Math.random() * (max - min +1) + min);
    return index;
  }

  private _getWords(wordsToGet  = 1):Array<string> {
    const words: string[] = [];
    for(let got = 0; got < wordsToGet; got++){
      words.push( this.wordsArray[this._getRandonIndex()]);
    }
    return words;
  }
}
