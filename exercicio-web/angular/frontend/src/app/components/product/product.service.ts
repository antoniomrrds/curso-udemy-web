import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  showMessage(msg: string): void { 
    console.log(msg)
  }
}
