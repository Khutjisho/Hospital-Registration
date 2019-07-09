import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  NewAppointment
  ID
 
  constructor(public RegService:RegistrationService, public route: ActivatedRoute) 
  {
   // this.NewAppointment=RegService.getAppointmentInfo()
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params=> {this.ID=params.get('ID')
    this.NewAppointment=this.RegService.ViewAppointment(this.ID)})
  }

  AddAppointment(IDNumber, AppReason, AppDate, AppDoctor){
    this.RegService.AddAppointment(IDNumber, AppReason, AppDate, AppDoctor)
    this.NewAppointment=this.RegService.ViewAppointment(this.ID)
  }
  
  RemoveAppointment(Appointments){
    this.RegService.RemoveAppointment(Appointments)
    this.NewAppointment=this.RegService.RemoveAppointment(Appointments)
  }

  EditAppointment(Appointments){
    this.RegService.EditAppointment(Appointments)
   // this.NewAppointment=this.RegService.EditAppointment(Appointments)
  }
}
