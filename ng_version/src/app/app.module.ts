import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {DataService} from './services/data.service';
import {PtPocService} from './services/pt-poc.service';

import { AppComponent } from './app.component';
import { HostMultiSelectComponent } from './host-multi-select/host-multi-select.component';

import { PanTableComponent } from './pan-table/pan-table.component';
import { PanTableFreezeFrameComponent } from './pan-table/pan-table-freeze-frame/pan-table-freeze-frame.component';
import { PanTablePanFrameComponent } from './pan-table/pan-table-pan-frame/pan-table-pan-frame.component';
import { PanControllerComponent } from './pan-table/pan-controller/pan-controller.component';
import { PanTableRowSelectorComponent } from './pan-table/pan-table-row-selector/pan-table-row-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PanTableComponent,
    PanTableFreezeFrameComponent,
    PanTablePanFrameComponent,
    PanControllerComponent,
    HostMultiSelectComponent,
    PanTableRowSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DataService, PtPocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
