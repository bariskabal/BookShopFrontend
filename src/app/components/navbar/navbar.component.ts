import { Component, OnInit } from '@angular/core';
import { UserInfos } from 'src/app/models/user/user-infos';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userDetails:UserInfos = new UserInfos();

  constructor(private authService:AuthService,
    private userService:UserService,
    private localStorage:LocalStorageService) { }

  ngOnInit() {
    let email = this.localStorage.get("email");
    this.getUser(email == null ? email = "" : email.toString());
  }
  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout()
  }

  getUser(email:string) {
    this.userService.getUserByEmail(email).subscribe(response => {
      this.userDetails = response.data;
    })
  }
}
