import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSidenavModule } from '@angular/material/sidenav';

// COMPONENTS
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/layouts/sidebar-item/sidebar-item.component'
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MainContentComponent } from './components/layouts/main-content/main-content.component';
import { ContentViewComponent } from './components/layouts/content-view/content-view.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    MainContentComponent,
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    SidebarItemComponent,
    ContentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    NgxChartsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
