import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { Router, ActivatedRoute } from '@angular/router';
import { EcommerceServiceService } from 'src/app/services/ecommerce-service.service';


@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  products : Product[]
  constructor(private service : EcommerceServiceService,private route : Router ) { }

  ngOnInit(): void {
    this.listOfProducts();
  }


listOfProducts(){

  this.service.getAllProduct().subscribe(data =>{
    console.log(data);
    this.products = data
  })
}
addProduct(){
  this.route.navigateByUrl("/addprod")
}


}
