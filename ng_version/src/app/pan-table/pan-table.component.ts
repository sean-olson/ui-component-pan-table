
import { Component, OnInit, Input } from '@angular/core';
import { PanTableConfig } from './_models/pan-table-config';

@Component({
  selector: 'app-pan-table',
  templateUrl: './pan-table.component.html',
  styleUrls: ['./pan-table.component.scss']
})
export class PanTableComponent implements OnInit {


  @Input() config: PanTableConfig

  constructor() { }

  ngOnInit(): void {
    console.log(this.config);
    
  }

}
