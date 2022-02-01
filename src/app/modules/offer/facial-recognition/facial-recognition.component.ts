import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';
import { ApplyserviceService } from 'src/app/services/applyservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-facial-recognition',
  templateUrl: './facial-recognition.component.html',
  styleUrls: ['./facial-recognition.component.scss']
})
export class FacialRecognitionComponent implements OnInit {

  webcamImage: WebcamImage | undefined;
  showCamera: boolean = false
  id:any
  loan_amount!:any;

  constructor(private router: Router, private applyservice: ApplyserviceService, private toastr: ToastrService, private tokenservice: TokenserviceService, private loadingbar: LoadingBarService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.loan_amount = localStorage.getItem('loan_amount');
  }

  saveImage(){
    this.loadingbar.start();
    const img = this.webcamImage?.imageAsDataUrl as string;
    const formData = new FormData();
    formData.append(
      "id" , this.id
    );
    formData.append(
      "passport_base64", img
    )
    this.applyservice.storeCameraCapture(formData).subscribe(
      res => {
        console.log(res,this.loan_amount);
        this.submitApplication();
      },

      err => {
        this.loadingbar.stop();
        console.log(err);
        this.toastr.error("Unable to save passport")
      }
    )


  }


  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  showCameraView(){
    this.showCamera = !this.showCamera;
  }

  submitApplication(){
    const data = {
      id: this.id,
      loan_amount: this.loan_amount
    }
    return this.applyservice.submitApplication(data).subscribe(
      res => {
        this.toastr.success("Loan Application Successfull");
        this.router.navigateByUrl('offer/completed');
        if(!this.tokenservice.get()){
          localStorage.removeItem('id');
        }
        this.loadingbar.stop();

      },

      err => {
        this.loadingbar.stop();
        console.log(err)
        this.toastr.error("Something Went Wrong");
      }
    )
  }

}
