import { Component, OnInit, Input } from '@angular/core';
import { PanFrameConfig } from '../_models/pan-frame-config';

@Component({
  selector: 'app-pan-table-pan-frame',
  templateUrl: './pan-table-pan-frame.component.html',
  styleUrls: ['./pan-table-pan-frame.component.scss']
})
export class PanTablePanFrameComponent implements OnInit {

  @Input() config: PanFrameConfig;
  @Input() data: {}[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
