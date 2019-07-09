import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

NewPatientArray
ID

  constructor(public RegService: RegistrationService, public route: ActivatedRoute) {
    this.NewPatientArray= this.RegService.getPatient()
}

  ViewPatient(ID){
  this.RegService.ViewPatient(ID)
}

  RemovePatient(Info){
  this.RegService.RemovePatient(Info)  
}


  ngOnInit() {
  
  this.route.paramMap.subscribe(params=> {this.ID=params.get('ID')
       this.NewPatientArray= this.RegService.ViewPatient(this.ID)})
}

}