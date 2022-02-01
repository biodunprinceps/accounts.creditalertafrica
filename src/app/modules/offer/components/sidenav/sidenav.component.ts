import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApplyserviceService } from 'src/app/services/applyservice.service';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  loggedIn: boolean = false;
  photo!: any;

  constructor(private router: Router, private tokenservice: TokenserviceService, private toastr: ToastrService, private applyservice: ApplyserviceService, private authservice: AuthserviceService) { }

  ngOnInit(): void {
    this.loadPic()
  }

  logout(){
    localStorage.clear();
    this.toastr.error("Logged Out Successfully")
    this.router.navigateByUrl('');
  }

  loadPic(){
    return this.authservice.loadDashboard().subscribe(
      res => {
        this.photo = res.loans[0].photo_url
      },

      err => {
        console.log(err)
      }
    )
  }

}
