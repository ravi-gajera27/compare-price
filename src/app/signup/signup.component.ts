import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  model: any = {};
  show = false;

  ngOnInit() {
    let token = localStorage.getItem("auth_token");
    console.log(token);

    if (token) {
      this.router.navigate(["/table"]);
    }
  }

  passwordShow() {
    this.show = !this.show;
  }

  onSubmit() {
    this.dataService.signup(this.model).then((res) => {
      localStorage.setItem("auth_token", res.id);
      window.alert("Signup Successfully");
      this.router.navigate(["/search"]);
    });
  }
}
