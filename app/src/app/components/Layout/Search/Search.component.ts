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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
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

  keyEnter(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_yTpReBvB8aox16e8(bh);
      //appendnew_next_keyEnter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hH6nC9Yi86tfJqtR');
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

      bh = this.searchMoviesResult(bh);
      //appendnew_next_sd_ZjbXNJQDEbu2M9QU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZjbXNJQDEbu2M9QU');
    }
  }

  async searchMoviesResult(bh) {
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
      //appendnew_next_searchMoviesResult
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ghu8WgZqG7OM6OQy');
    }
  }

  sd_HgDYYC2d55Kmm3gS(bh) {
    try {
      const page = this.page;
      page.searchResult = page.searchResult.results;

      bh = this.sd_h9uiicALZngY2lI1(bh);
      //appendnew_next_sd_HgDYYC2d55Kmm3gS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HgDYYC2d55Kmm3gS');
    }
  }

  sd_h9uiicALZngY2lI1(bh) {
    try {
      if (
        this.sdService.operators['gt'](
          this.page.searchResult.length,
          0,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_z7xLHBXyQWAz9Z7v(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.searchResult.length,
          0,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8G0S8RiTLIM4I4zG(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h9uiicALZngY2lI1');
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

  sd_8G0S8RiTLIM4I4zG(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('No Result Found', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      //appendnew_next_sd_8G0S8RiTLIM4I4zG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8G0S8RiTLIM4I4zG');
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
      return await this.errorHandler(bh, e, 'sd_1Maq3Q7H22hrLFb0');
    }
  }

  sd_yTpReBvB8aox16e8(bh) {
    try {
      const page = this.page;
      if (bh.input.event.key !== 'Enter') {
        return;
      }

      bh = this.sd_rSpEnxos2mpoSaXJ(bh);
      //appendnew_next_sd_yTpReBvB8aox16e8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yTpReBvB8aox16e8');
    }
  }

  sd_rSpEnxos2mpoSaXJ(bh) {
    try {
      let outputVariables = this.search();

      //appendnew_next_sd_rSpEnxos2mpoSaXJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rSpEnxos2mpoSaXJ');
    }
  }

  sd_9R9WNKnfCClKPV3S(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.error.error.status_message, 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_9R9WNKnfCClKPV3S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9R9WNKnfCClKPV3S');
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
      false ||
      this.sd_5FHZjvDLmvFlKvb5(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_5FHZjvDLmvFlKvb5(bh) {
    const nodes = ['sd_Ghu8WgZqG7OM6OQy'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_9R9WNKnfCClKPV3S(bh);
      //appendnew_next_sd_5FHZjvDLmvFlKvb5
      return true;
    }
    return false;
  }
  //appendnew_flow_SearchComponent_Catch
}
