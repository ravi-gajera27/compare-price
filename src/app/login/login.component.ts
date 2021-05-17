import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  model: any = {};
  show = false;

  ngOnInit() {
    let token = localStorage.getItem('auth_token');
    console.log(token);
    
    if (token) {
      this.router.navigate(['/search']);
    }
  }

  passwordShow() {
    this.show = !this.show;
  }

  onSubmit() {
    this.dataService.login(this.model).subscribe(res=>{
      if(!res.empty){
        localStorage.setItem('auth_token',res.docs[0].id )
        window.alert('Login Successfully')
        this.router.navigate(['/search'])
      }
      else{
        window.alert('Invalid Credentials')
      }
    })
  }
}
