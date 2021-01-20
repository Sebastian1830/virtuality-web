import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListPageComponent } from '../views/patient-list-page/patient-list-page.component';
import { DashboardPageComponent } from '../views/dashboard-page/dashboard-page.component';
import { RegisterPatientPageComponent } from '../views/register-patient-page/register-patient-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'patient-list', component: PatientListPageComponent },
  { path: 'register-patient', component: RegisterPatientPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
