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
import { discoverRequest } from 'app/sd-services/discoverRequest'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Posters',
  templateUrl: './Posters.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class PostersComponent {
  @Input('Title')
  public Title: any = undefined;
  @Input('genresCode')
  public genresCode: any = undefined;
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
      this.getDatas(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { posters: undefined });

    //append_listeners
  }

  getDatas(bh) {
    try {
      bh = this.sd_xKtwMpMz5Jy5cjor(bh);
      //appendnew_next_getDatas
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NMcpbQpnDfJ4Vz0S');
    }
  }

  gotoDetails(id = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};

      bh = this.gotoPage(bh);
      //appendnew_next_gotoDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xXlUF4lRJUZBUnNC');
    }
  }

  //appendnew_flow_PostersComponent_start

  sd_xKtwMpMz5Jy5cjor(bh) {
    try {
      this.page.Title = bh.input.Title;

      bh = this.discoverRequest(bh);
      //appendnew_next_sd_xKtwMpMz5Jy5cjor
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xKtwMpMz5Jy5cjor');
    }
  }

  async discoverRequest(bh) {
    try {
      const discoverRequestInstance: discoverRequest =
        this.__page_injector__.get(discoverRequest);

      let outputVariables = await discoverRequestInstance.withoutflow(
        bh.pageInput.genresCode,
        undefined
      );
      this.page.posters = outputVariables.input.posters;

      //appendnew_next_discoverRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V7NE3H6v6bJFWVqo');
    }
  }

  async gotoPage(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/movieDetails/:id');
      await this.__page_injector__
        .get(Router)
        .navigate(
          [this.sdService.formatPathWithParams(path, { id: bh.input.id })],
          {
            queryParams: Object.assign(qprm, ''),
          }
        );

      //appendnew_next_gotoPage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VYQpkriOlA4xjkob');
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
  //appendnew_flow_PostersComponent_Catch
}
