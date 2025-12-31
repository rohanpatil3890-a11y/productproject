import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iproduct } from '../shared/model/product';
import { products } from '../shared/const/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      character => {
        const random = (Math.random() * 16) | 0
        const value = character === 'x' ? random : (random & 0x3) | 0x8
        return value.toString(16)
      }
    )
  }

  productsArray: Array<Iproduct> = products;

  @ViewChild('ProductTitle') ProductTitle !: ElementRef;
  @ViewChild('Productcategory') Productcategory !: ElementRef;
  @ViewChild('Productprice') Productprice !: ElementRef;
  @ViewChild('Productrating') Productrating !: ElementRef;
  @ViewChild('Productdescription') Productdescription !: ElementRef;
  @ViewChild('ProductImage') ProductImage !: ElementRef;


  AddProductCard() {

    if (this.ProductTitle.nativeElement.value,this.Productdescription.nativeElement.value,this.Productprice.nativeElement.value) {
      let ProductObj: Iproduct = {

        title: this.ProductTitle.nativeElement.value,
        description: this.Productdescription.nativeElement.value,
        price: this.Productprice.nativeElement.value,
        rating: this.Productrating.nativeElement.value,
        category: this.Productcategory.nativeElement.value,
        img: this.ProductImage.nativeElement.value,
        id: this.uuid()

      }

      this.productsArray.unshift(ProductObj);
      this.ProductTitle.nativeElement.value = "";
      this.Productdescription.nativeElement.value = "";
      this.Productprice.nativeElement.value = "";
      this.Productrating.nativeElement.value = "";
      this.Productcategory.nativeElement.value = "";
      this.ProductImage.nativeElement.value = "";
    }



  }


}
