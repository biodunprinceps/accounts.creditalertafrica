import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password = ""
  email = ""

  constructor(private router:Router, private authservice: AuthserviceService, private toastr: ToastrService, private loadingbar: LoadingBarService, private tokenservice: TokenserviceService) { }

  ngOnInit(): void {
  }

  login(){
    this.loadingbar.start();
    const userData = {
      email : this.email,
      pin : this.password
    }
    return this.authservice.login(userData).subscribe(
      res => {
        const token = res.access_token;
        this.tokenservice.handle(token);
        this.toastr.success('logged in successfully')
        this.router.navigateByUrl('/dashboard');
        this.loadingbar.stop();
      },

      err=>{
        const errMessage = err.error.message
        this.toastr.error(errMessage, '', {
          enableHtml: true
        });
        this.loadingbar.stop();
        console.log(err)
      }
    )

  }

}
