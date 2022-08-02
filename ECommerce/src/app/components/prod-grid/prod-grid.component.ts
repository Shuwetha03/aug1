import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { EcommerceServiceService } from 'src/app/services/ecommerce-service.service';


@Component({
  selector: 'app-prod-grid',
  templateUrl: './prod-grid.component.html',
  styleUrls: ['./prod-grid.component.css']
})
export class ProdGridComponent implements OnInit {

  products : Product[]
  constructor(private service : EcommerceServiceService,
              private route:Router,
              private activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => {
      this.listOfProducts()
    }

    );
  }

  addProd(){
    this.route.navigateByUrl("/prodform")
  }

  listOfProducts(){
    this.service.getAllProduct().subscribe(data =>{
      console.log(data);
      this.products = data
    }
    )
  }

  goHome(){
    this.route.navigateByUrl("/");
  }
}