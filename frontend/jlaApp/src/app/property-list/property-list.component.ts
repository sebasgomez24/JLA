
import { Component, OnInit, OnDestroy } from '@angular/core';

import { PropertyService } from '../properties/properties.service';
import { PropertyItem } from '../properties/property'

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass'],
  providers: [PropertyService]
})
export class PropertyListComponent implements OnInit, OnDestroy {
    private req: any;
    title = "Property List";
    propertyList: [PropertyItem]

  constructor(private _property:PropertyService) { }

  ngOnInit() {
    this.req = this._property.list().subscribe(data=>{
      this.propertyList = data as [PropertyItem]
    })
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

}