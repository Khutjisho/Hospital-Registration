import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../Service/registration.service';
import { ActivatedRoute } from '@angular/router';
import {__param} from 'tslib';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  NewPatientArray
    
  constructor(public RegService: RegistrationService, public route: ActivatedRoute) {
    this.NewPatientArray= this.RegService.getPatient()
}

AddPatient(IDNumber, PatientName, PatientSurname, Gender, ContactNumber, PhysicalAddress, MedicalRecord){
  this.RegService.AddPatient(IDNumber, PatientName, PatientSurname, Gender, ContactNumber, PhysicalAddress, MedicalRecord);
}

  ngOnInit() {
               
  }
}
// this.route.paramMap.subscribe(params =>{this.Pat_ID = params.get('id')})