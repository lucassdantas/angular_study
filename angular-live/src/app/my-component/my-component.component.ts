import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from '../services/product-service.service';
import { OnInit } from '@angular/core';

interface Drink {
  idDrink:string,
  strDrinkThumb:string,
  strDrink:string
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  productList$: Observable<Drink[]> = new Observable<Drink[]>();

  constructor(
    private productService: ProductService
  ){}
  ngOnInit(): void {
    this.productList$ = this.productService.fetchData('lemon').pipe(
      map( (response) => {
        return response.data;
      })
    )
  }

}
