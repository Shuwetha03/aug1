import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EcommerceServiceService } from 'src/app/services/ecommerce-service.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  products : Product[]
  constructor(private service : EcommerceServiceService,private route:Router, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  showProduct(){
    this.route.navigateByUrl("/products")
  }

}
