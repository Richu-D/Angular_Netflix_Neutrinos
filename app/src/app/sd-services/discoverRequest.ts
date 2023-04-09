/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class discoverRequest {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_discoverRequest

  async withoutflow(genresCode = '', posters: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          genresCode: genresCode,
          posters: posters,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_dmFDW8juuAQ3tEKd(bh);
      //appendnew_next_withoutflow
      return (
        // formatting output variables
        {
          input: {
            posters: bh.input.posters,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CvfWGcwP1WeIusgM');
    }
  }

  //appendnew_flow_discoverRequest_start

  async sd_dmFDW8juuAQ3tEKd(bh) {
    try {
      bh.local.baseUrl = bh.system.environment.properties.BASE_URL;
      bh.local.secret = bh.system.environment.properties.API_SECRET;

      bh = await this.sd_c5JibFmdmI4DvjY1(bh);
      //appendnew_next_sd_dmFDW8juuAQ3tEKd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dmFDW8juuAQ3tEKd');
    }
  }

  async sd_c5JibFmdmI4DvjY1(bh) {
    try {
      bh.local.url = `${bh.local.baseUrl}/discover/movie?api_key=${bh.local.secret}&with_genres=${bh.input.genresCode}`;

      bh = await this.sd_w1t8OSopnLw05ilI(bh);
      //appendnew_next_sd_c5JibFmdmI4DvjY1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c5JibFmdmI4DvjY1');
    }
  }

  async sd_w1t8OSopnLw05ilI(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.responce = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_gd3Aym8lqUarYGAQ(bh);
      //appendnew_next_sd_w1t8OSopnLw05ilI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w1t8OSopnLw05ilI');
    }
  }

  async sd_gd3Aym8lqUarYGAQ(bh) {
    try {
      bh.input.posters = bh.local.responce.results;

      //appendnew_next_sd_gd3Aym8lqUarYGAQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gd3Aym8lqUarYGAQ');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_discoverRequest_Catch
}
