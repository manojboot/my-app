import { Component, OnInit } from '@angular/core';
import { OwnerDetailService } from '../owner-detail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any;
 
  constructor(private ownerDetailService : OwnerDetailService) { }

  ngOnInit(){
      this.ownerDetailService.showOwnerData()
                             .subscribe(data =>{
                                  this.users = data;
                             });
  }
 
      

}
