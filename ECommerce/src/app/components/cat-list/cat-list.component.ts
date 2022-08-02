import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceServiceService } from 'src/app/services/ecommerce-service.service';
import { ProductCategory } from 'src/app/common/productCategory';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  categories : ProductCategory[]
  constructor(private service : EcommerceServiceService,private route : Router ) { }

  ngOnInit(): void {
    this.listOfCategories();
  }


  listOfCategories(){

  this.service.getAllCategory().subscribe(data =>{
    console.log(data);
    this.categories = data
  })
}
}