import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  products: any[]
  search_word = ''
  available = true
  search() {
    this.available = true
    this.dataService.getPoducts(this.search_word).subscribe((res) => {
      this.products = res.data;
      if(this.products.length == 0){
        this.available = false
      }
    })
  }

  
  compareProduct(id, title){
    this.router.navigate(['/compare/' + title + '/' + id])
  }

}
