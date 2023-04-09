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
import { Router } from '@angular/router'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Search',
  templateUrl: './Search.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class SearchComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_dpYSCFX57mi8w4x6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dpYSCFX57mi8w4x6(bh) {
    try {
      bh = this.sd_qHN72jmxiVW9q0MO(bh);
      //appendnew_next_sd_dpYSCFX57mi8w4x6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dpYSCFX57mi8w4x6');
    }
  }

  search(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_zU6V93RRBB0H5YAl(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_12OGPizXQtRCLlYG');
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
      return this.errorHandler(bh, e, 'sd_8JB4ILEBENeICGbK');
    }
  }

  //appendnew_flow_SearchComponent_start

  sd_qHN72jmxiVW9q0MO(bh) {
    try {
      this.page.search = undefined;
      this.page.searchResult = undefined;

      //appendnew_next_sd_qHN72jmxiVW9q0MO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qHN72jmxiVW9q0MO');
    }
  }

  sd_zU6V93RRBB0H5YAl(bh) {
    try {
      bh.local.secret = bh.system.environment.properties.API_SECRET;
      bh.local.baseUrl = bh.system.environment.properties.BASE_URL;

      bh = this.sd_ZjbXNJQDEbu2M9QU(bh);
      //appendnew_next_sd_zU6V93RRBB0H5YAl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zU6V93RRBB0H5YAl');
    }
  }

  sd_ZjbXNJQDEbu2M9QU(bh) {
    try {
      const page = this.page;
      bh.local.url = `${bh.local.baseUrl}/search/movie?api_key=${bh.local.secret}&query=${page.search}`;

      bh = this.sd_Ghu8WgZqG7OM6OQy(bh);
      //appendnew_next_sd_ZjbXNJQDEbu2M9QU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZjbXNJQDEbu2M9QU');
    }
  }

  async sd_Ghu8WgZqG7OM6OQy(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.searchResult = await this.sdService.nHttpRequest(
        requestOptions
      );

      bh = this.sd_HgDYYC2d55Kmm3gS(bh);
      //appendnew_next_sd_Ghu8WgZqG7OM6OQy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ghu8WgZqG7OM6OQy');
    }
  }

  sd_HgDYYC2d55Kmm3gS(bh) {
    try {
      const page = this.page;
      page.searchResult = page.searchResult.results;

      this.sd_z7xLHBXyQWAz9Z7v(bh);
      //appendnew_next_sd_HgDYYC2d55Kmm3gS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HgDYYC2d55Kmm3gS');
    }
  }

  sd_z7xLHBXyQWAz9Z7v(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.searchResult);

      //appendnew_next_sd_z7xLHBXyQWAz9Z7v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z7xLHBXyQWAz9Z7v');
    }
  }

  async gotoPage(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/movieDetails/:id');
      await this.__page_injector__
        .get(Router)
        .navigate([
          this.sdService.formatPathWithParams(path, { id: bh.input.id }),
        ]);

      //appendnew_next_gotoPage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1Maq3Q7H22hrLFb0');
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
  //appendnew_flow_SearchComponent_Catch
}
