import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  @Input() dataset:any;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  idSelected(id){
    let data = this.dataset[0].filter(x=>x.id==id)
    this.newItemEvent.emit(data);
  }

}
