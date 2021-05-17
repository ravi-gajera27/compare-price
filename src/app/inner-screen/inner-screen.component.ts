import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-inner-screen',
  templateUrl: './inner-screen.component.html',
  styleUrls: ['./inner-screen.component.css']
})
export class InnerScreenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  param:any

  retailer_list = ['amazon', 'flipkart', 'snapdeal', 'ebay', 'paytm','croma']
  product_list:any = []
  ngOnInit() {

    this.route.params.subscribe((param)=>{
      this.param = param
      if(param.id){
     this.compareProducts(param.id)
      }
    })
  }

  data:any
  available = true
  compareProducts(id){
    this.available = true
    this.dataService.compareProducts(id).subscribe((res)=>{
      this.data = res.data
      let stores = res.data.stores
     let i = 0
      for(let item of stores){
        if(item[this.retailer_list[i]]){
          this.product_list = [...this.product_list, ...item[this.retailer_list[i]]]
        }
        i++
      }
      if(!this.product_list.length){
        this.available = false
      }
    })
  }
}
