
import { Component , OnInit} from '@angular/core';

import { DataService } from './services/data.service';
import { PtPocService } from './services/pt-poc.service';

import { PanTableConfig } from './pan-table/_models/pan-table-config';
import { PanFrameConfig }  from './pan-table/_models/pan-frame-config';
import { FreezeFrameConfig }  from './pan-table/_models/freeze-frame-config';
import { ColumnDefintion } from './pan-table/_models/column-definition';
import {DataFieldConfig} from './pan-table/_models/data-field-config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  panTableConfig: PanTableConfig;

  constructor(private svcData: DataService, private svcPoc: PtPocService) {

  }

  getFreezeFrameConfig(): FreezeFrameConfig {
    const config = new FreezeFrameConfig({header_group_class: 'poc-freeze-frame-header-group',
                                          data_wrapper_class: 'poc-freeze-frame-data-wrapper', 
                                          data_row_class: 'poc-freeze-frame-data-row-wrapper',
                                          add_selector: true, 
                                          selector_id_field: 'id', 
                                          on_toggle_subject: this.svcData.onToggleSelectedItems,
                                          on_select_handler: this.svcData.onSelectItem,
                                          on_deselect_handler: this.svcData.onDeselectItem,                                          
                                          column_defs: []});


    config.columnDefs.push(new ColumnDefintion({heading: 'User', 
                                                header_cell_class: 'poc-header-cell-user', 
                                                data_cell_class: 'poc-data-cell-user', 
                                                data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field', 
                                                                                 is_array: false,
                                                                                 display_field: 'fullName',
                                                                                 data_attribute_field: 'id'
                                                                                })
                                              })
                          );
    return config;
  }
  getPanFrameConfig(): PanFrameConfig {
    const config = new PanFrameConfig({header_group_class: 'poc-pan-frame-header-group', data_wrapper_class: 'poc-pan-frame-data-wrapper', data_row_class: 'poc-pan-frame-data-row-wrapper', column_defs: []});

    config.columnDefs.push(new ColumnDefintion({heading: 'Email', 
                                                header_cell_class: 'poc-header-cell-email', 
                                                data_cell_class: 'poc-data-cell-email', 
                                                data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field-link', 
                                                                                 is_array: false,
                                                                                 display_field: 'email',
                                                                                 data_attribute_field: 'email',
                                                                                 click_handler: this.svcPoc.onSendEmail 
                                                                                })
                                              })
                          );

    config.columnDefs.push(new ColumnDefintion({heading: 'Job Title', 
                                                header_cell_class: 'poc-header-cell-job-title', 
                                                data_cell_class: 'poc-data-cell-job-title', 
                                                data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field', 
                                                                                 is_array: false,
                                                                                 display_field: 'jobTitle'
                                                          })
                                              })
                          );                          

    config.columnDefs.push(new ColumnDefintion({heading: 'IP Address', 
                                                header_cell_class: 'poc-header-cell-ip', 
                                                data_cell_class: 'poc-data-cell-ip', 
                                                data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field', 
                                                                                 is_array: false,
                                                                                 display_field: 'email'
                                                                                })
                                              })
                          );

    config.columnDefs.push(new ColumnDefintion({heading: 'University', 
                                                header_cell_class: 'poc-header-cell-university', 
                                                data_cell_class: 'poc-data-cell-university', 
                                                data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field', 
                                                                                is_array: false,
                                                                                display_field: 'university'
                                                                                })
                                                })
                            );                          


    config.columnDefs.push(new ColumnDefintion({heading: 'Shirt Size', 
                                                header_cell_class: 'poc-header-cell-shirt', 
                                                data_cell_class: 'poc-data-cell-shirt', 
                                                data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field', 
                                                                                is_array: false,
                                                                                display_field: 'shirtSize'
                                                                                })
                                                  })
                              ); 
                              
    config.columnDefs.push(new ColumnDefintion({heading: 'City', 
                                                header_cell_class: 'poc-header-cell-city', 
                                                data_cell_class: 'poc-data-cell-city', 
                                                data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field', 
                                                                                is_array: false,
                                                                                display_field: 'city'
                                                                                })
                                                                      })
                                ); 
                                
  config.columnDefs.push(new ColumnDefintion({heading: 'Postal Code', 
                                              header_cell_class: 'poc-header-cell-postal', 
                                              data_cell_class: 'poc-data-cell-postal', 
                                              data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field', 
                                                                              is_array: false,
                                                                              display_field: 'postalCode' 
                                                                              })
                                                                    })
                                  ); 
                                  
  config.columnDefs.push(new ColumnDefintion({heading: 'Gender', 
                                              header_cell_class: 'poc-header-cell-gender', 
                                              data_cell_class: 'poc-data-cell-gender', 
                                              data_field: new DataFieldConfig({data_field_class: 'so-pan-table-data-field', 
                                                                              is_array: false,
                                                                              display_field: 'gender'
                                                                              })
                                                                    })
                                    );                                   
    return config;    
  }

  ngOnInit() {

    this.panTableConfig  = new PanTableConfig({
      title: 'Pan Table Control', 
      data: this.svcData.data, 
      header_wrapper_class: 'poc-header-wrapper',
      body_wrapper_class: 'poc-body-wrapper',
      freeze_frame_config: this.getFreezeFrameConfig(), 
      pan_frame_config: this.getPanFrameConfig()
    });
    
  }

}
