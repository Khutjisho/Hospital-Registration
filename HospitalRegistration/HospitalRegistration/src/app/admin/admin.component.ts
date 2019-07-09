import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../Service/registration.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  NewPatientArray

  constructor(public RegService: RegistrationService) {
              this.NewPatientArray= this.RegService.getPatient()
   }

  ngOnInit() {
  }
  
AddPatient(IDNumber, PatientName, PatientSurname, Gender, ContactNumber, PhysicalAddress, MedicalRecord){
            this.RegService.AddPatient(IDNumber, PatientName, PatientSurname, Gender, ContactNumber, PhysicalAddress, MedicalRecord);
}

RemovePatient(Info){
  this.RegService.RemovePatient(Info)  
}

}
