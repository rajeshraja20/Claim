import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
//import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { UploadFileService } from  '../../app/upload-file.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {
  
  status:string;
  userDetails: any = [];
  constructor(private router: Router, private uploadFileService: UploadFileService) {
    console.log(this.uploadFileService.CLAIM_DATA);
    this.userDetails = this.uploadFileService.CLAIM_DATA;
   }
  
  ngOnInit(): void {
    this.uploadFileService.sharedMessage.subscribe(status => this.status = status);

  }
 
  
  gotoHome(index){
    console.log(index);
    this.router.navigate(['/status', index]);  
}

}
