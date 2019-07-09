import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  NewAppointment

  constructor(public RegService:RegistrationService) { 
      this.NewAppointment.RegService.getAppointmentInfo()
  }

  ngOnInit() {
  }

  AddAppointment(IDNumber, AppReason, AppDate, AppDoctor){
    this.RegService.AddAppointment(IDNumber, AppReason, AppDate, AppDoctor)
  }

  
  RemovePatient(Appointments){
    this.RegService.RemovePatient(Appointments)
  }
}
