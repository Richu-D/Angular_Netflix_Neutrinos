/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_csfjAOTXEbMQGKxL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_csfjAOTXEbMQGKxL(bh) {
    try {
      bh = this.sd_5Fa2ijSVBwrmUhXU(bh);
      //appendnew_next_sd_csfjAOTXEbMQGKxL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_csfjAOTXEbMQGKxL');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_5Fa2ijSVBwrmUhXU(bh) {
    try {
      bh = this.sd_A6wbpvTxt7aCO8yf(bh);
      //appendnew_next_sd_5Fa2ijSVBwrmUhXU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5Fa2ijSVBwrmUhXU');
    }
  }

  sd_A6wbpvTxt7aCO8yf(bh) {
    try {
      const page = this.page;
      page.banner = [
        {
          backdrop_path: '/ovM06PdF3M8wvKb06i4sjW3xoww.jpg',
          original_title: 'Avatar: The Way of Water',
          overview:
            'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
        },
      ];

      //appendnew_next_sd_A6wbpvTxt7aCO8yf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A6wbpvTxt7aCO8yf');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_HomeComponent_Catch
}
