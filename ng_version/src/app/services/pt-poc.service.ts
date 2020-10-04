import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PtPocService {

  constructor() { }

  onSendEmail(evt: Object) {
    console.log(evt);
  }

}
