import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import  {AppointmentDetailsComponent} from './appointment-details/appointment-details.component';

const routes: Routes = [{path:'Admin',component: AdminComponent},
                        {path:'Patient',component: PatientComponent},
                        {path:'Doctor', component: DoctorComponent},
                        {path: 'Appointment', component:AppointmentComponent},
                        {path: 'PatientDetails/:ID', component:PatientDetailsComponent},
                        {path: 'AppointmentDetails/:ID', component:AppointmentDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
