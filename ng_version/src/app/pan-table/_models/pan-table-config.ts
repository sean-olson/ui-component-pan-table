import { PanFrameConfig }  from './pan-frame-config';
import { FreezeFrameConfig }  from './freeze-frame-config';

export class PanTableConfig {
  
  private _title: string;
  private _data: object[];
  private _header_wrapper_class: string;
  private _body_wrapper_class: string;
  private _freeze_frame_config: FreezeFrameConfig;
  private _pan_frame_config: PanFrameConfig;


  constructor(params: {title?: string, 
                      data?: object[], 
                      header_wrapper_class?: string,
                      body_wrapper_class?: string,
                      freeze_frame_config?: FreezeFrameConfig, 
                      pan_frame_config?: PanFrameConfig}) {

    this._title = params.title || '';
    this._data = params.data || [];
    this._header_wrapper_class = params.header_wrapper_class || '';
    this._body_wrapper_class = params.body_wrapper_class || '';
    this._freeze_frame_config = params.freeze_frame_config || undefined;
    this._pan_frame_config = params.pan_frame_config || undefined;

  }

  set title(val: string) {
    this._title = val;
  }
  get title(): string {
    return this._title;
  }  
  set data(obj: object[]) {
    this._data = obj;
  }
  get data(): object[] {
    return this._data;
  } 
  set headerWrapperClass(val: string) {
    this._header_wrapper_class = val;
  }
  get headerWrapperClass(): string {
    return this._header_wrapper_class;
  } 
  set bodyWrapperClass(val: string) {
    this._body_wrapper_class = val;
  }
  get bodyWrapperClass(): string {
    return this._body_wrapper_class;
  }        
  set freezeFrameConfig(obj: FreezeFrameConfig) {
    this._freeze_frame_config = obj;
  }
  get freezeFrameConfig(): FreezeFrameConfig {
    return this._freeze_frame_config;
  }   
  set panFrameConfig(obj: PanFrameConfig) {
    this._pan_frame_config = obj;
  }
  get panFrameConfig(): PanFrameConfig {
    return this._pan_frame_config;
  } 

}
