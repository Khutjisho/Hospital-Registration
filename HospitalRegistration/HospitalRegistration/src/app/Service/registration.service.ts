//import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  PatientArray = []
  listPatient;
  IDNumber:string
  PatientName :string
  PatientSurname:string 
  Gender:string
  ContactNumber:string
  PhysicalAddress:string
  MedicalRecord:string

  Appointment = []
  AppDate:string;
  AppReason:string;
  AppDoctor:string;

  constructor() { }
  

  AddPatient(IDNumber, PatientName, PatientSurname, Gender, ContactNumber, PhysicalAddress, MedicalRecord){
    this.PatientArray.push({ID:IDNumber, Name:PatientName, Surname:PatientSurname, Gend:Gender, 
                      Number: ContactNumber, Address:PhysicalAddress, Record:MedicalRecord})
  }

  RemovePatient(Info){
    const index = this.PatientArray.indexOf(Info)
    this.PatientArray.splice(index,1);
    if (this.PatientArray.length<=0){

    }
  }

  EditPatient(NewPatientArray){
let index = this.PatientArray.indexOf(NewPatientArray)
var newID = prompt("Please edit new name", NewPatientArray.ID)
var newname = prompt("Please edit new name", NewPatientArray.Name)
var newsur = prompt("Please edit new surname", NewPatientArray.Surname)
var newgen = prompt("Please edit new surname", NewPatientArray.Gend)
var newnum = prompt("Please edit new surname", NewPatientArray.Number)
var newAddr = prompt("Please edit new surname", NewPatientArray.Address)
var newMed= prompt("Please edit new surname", NewPatientArray.Record)
  }

ListPatients(){
    return this.AddPatient
}

ViewPatient(ID)
{
  let PatID =[]
  this.PatientArray.forEach(Info=>
    {
    if(Info.ID ==ID)
    {
      PatID = Info
    }
    })
    return PatID
}

getPatient(){
  return this.PatientArray
}

AddAppointment(IDNumber, AppReason, AppDate, AppDoctor){
  this.Appointment.push({ID:IDNumber, appreason:AppReason, appdate:AppDate, appdoctor:AppDoctor})
}

//RemovePatient(Info){
  //const index = this.PatientArray.indexOf(Info)
 // this.PatientArray.splice(index,1);
RemoveAppointment(Appointments){
  const index= this.Appointment.indexOf(Appointments)
  this.Appointment.splice(index,1)
}

EditAppointment(Appointments)
{
let index = this.Appointment.indexOf(Appointments)
let newappdate = prompt("Edit date", Appointments.appdate)

if (newappdate !=null){
  this.Appointment[index].AppDate = newappdate
}
}

getAppointmentInfo(){
  return this.Appointment
}

ViewAppointment(ID){

  let SelectedAppointmentID =[]
  this.Appointment.forEach(Appointments =>
    {
      if(Appointments.ID == ID)
      {
        SelectedAppointmentID.push(Appointments)
      }
    })

    return SelectedAppointmentID
}

}
// for (let x=0; x=>this.PatientArray.length; x+1){
  //   if (this.PatientArray[x].ID == ID){
  //      return this.PatientArray[x]
  //   }

  // }