import { Component, OnInit } from '@angular/core';
import { ServicesService } from './servicesDesServices/services.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public servicesService: ServicesService) { }
  public services: Object[];

  ngOnInit() {
    this.servicesService.getServices().subscribe(res => this.services = res);
  }

}
