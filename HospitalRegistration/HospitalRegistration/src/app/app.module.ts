import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule, MatInputModule, MatListModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import {MatSelectModule} from '@angular/material/select';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PatientComponent,
    DoctorComponent,
    AppointmentComponent,
    PatientDetailsComponent,
    AppointmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule, MatInputModule,
    ReactiveFormsModule, FormsModule,
    MatListModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
