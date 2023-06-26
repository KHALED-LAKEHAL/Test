import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxSchedulerModule } from 'devextreme-angular';
import {
  Priority, Resource, Appointment, Service,
} from './app.service';


@Component({
    styleUrls: ['./app.component.css'],
  selector: 'demo-app',
  templateUrl: './app.component.html',
  providers: [Service],
})
export class AppComponent {
  appointmentsData: Appointment[];

  resourcesData: Resource[];

  prioritiesData: Priority[];

  currentDate: Date = new Date(2021, 1, 2);

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
    this.resourcesData = service.getResources();
    this.prioritiesData = service.getPriorities();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxSchedulerModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
