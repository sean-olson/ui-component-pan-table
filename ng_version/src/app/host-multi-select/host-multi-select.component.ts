import { Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-host-multi-select',
  templateUrl: './host-multi-select.component.html',
  styleUrls: ['./host-multi-select.component.scss']
})
export class HostMultiSelectComponent implements OnInit, OnDestroy {

  selectAllChecked = false;
  onClearMultiSelect: Subscription;

  constructor(private svcData: DataService) { }

  onSelectAll() {
    this.svcData.onSelectAllToggled(this.selectAllChecked);
  }

  onDeselectAll() {
    this.svcData.onSelectAllToggled(false);
    this.selectAllChecked = false;
  }

  ngOnInit() {

    this.onClearMultiSelect =  this.svcData.onToggleSelectedItems.subscribe((is_toggled: boolean) => {
      this.selectAllChecked = is_toggled;
    });
  }

  ngOnDestroy() {
    this.onClearMultiSelect.unsubscribe();
  }

}

