import { Component } from '@angular/core';
import {DatasetService } from './dataset.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'claro';
  dataset = {}
  characteristics = {}
  prices = {}
  constructor(private dataService: DatasetService) {}

  ngOnInit(): void {
    this.dataService.getData()
    .subscribe(data=>{
      this.dataset = [data]
      this.characteristics = [data[0].versions[0].characteristics]
      this.prices = [data[0].versions[0].productOfferingPrices]
    });
    
  }

  addItem(data: any) {
    this.characteristics = [data[0].versions[0].characteristics]
    this.prices = [data[0].versions[0].productOfferingPrices]
  }

}
