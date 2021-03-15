import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((param) => {
      if (param.text) {
        this.available = true
        this.search_word = param.text
        this.dataService.getPoducts(this.search_word).subscribe((res) => {
          this.products = res.data;
          if (this.products.length == 0) {
            this.available = false
          }
        })
      }
    })
  }

  products: any[]
  search_word = ''
  available = true
  search() {
    this.router.navigate(['/search/' + this.search_word])
  }


  compareProduct(id, title) {
    this.router.navigate(['/compare/' + title + '/' + id])
  }

}
