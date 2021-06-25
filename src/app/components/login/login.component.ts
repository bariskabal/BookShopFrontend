import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  returnUrl: string;


  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService,private localStorage:LocalStorageService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.createLoginForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }
  login() {
    if(this.loginForm.valid) {

      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(
        response => {
          this.toastrService.success("Login successfully.")
          this.localStorage.set("token", response.data.token)
          this.localStorage.set("email", this.loginForm.get("email")?.value)
          this.router.navigateByUrl(this.returnUrl);
          setTimeout(() => { this.router.navigate([this.returnUrl]) }, 1000);
        },
        responseError => {
          this.toastrService.error(responseError.error)
        })
      }
  }

}
