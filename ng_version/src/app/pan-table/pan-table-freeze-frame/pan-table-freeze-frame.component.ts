import { Component, OnInit, Input } from '@angular/core';
import { FreezeFrameConfig } from '../_models/freeze-frame-config';

@Component({
  selector: 'app-pan-table-freeze-frame',
  templateUrl: './pan-table-freeze-frame.component.html',
  styleUrls: ['./pan-table-freeze-frame.component.scss']
})
export class PanTableFreezeFrameComponent implements OnInit {

  @Input() config: FreezeFrameConfig;
  @Input() data: {}[];

  constructor() { }


  onSelect(evt){
    console.log(evt.getAttribute('data-id'))
  }

  ngOnInit(): void {
    
    
  }

}
