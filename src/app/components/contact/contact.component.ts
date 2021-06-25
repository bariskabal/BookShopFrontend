import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private toastrService:ToastrService,private router:Router) { }

  ngOnInit() {
  }


  reload(){
    this.router.navigate(["/"])
    this.toastrService.success("Mesaj gönderildi.")
  }
}
