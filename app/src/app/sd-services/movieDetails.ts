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
export class movieDetails {
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

  //   service flows_movieDetails

  async sd_JeJpyXJhVEP56Ugl(
    url = '',
    movieData: any = undefined,
    castData: any = undefined,
    castUrl = '',
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          url: url,
          movieData: movieData,
          castData: castData,
          castUrl: castUrl,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_nnO0wM5KzC8wJZbg(bh);
      //appendnew_next_sd_JeJpyXJhVEP56Ugl
      return (
        // formatting output variables
        {
          input: {
            movieData: bh.input.movieData,
            castData: bh.input.castData,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JeJpyXJhVEP56Ugl');
    }
  }

  //appendnew_flow_movieDetails_start

  async sd_nnO0wM5KzC8wJZbg(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.movieData = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_Q6TVsltlO200mSdF(bh);
      //appendnew_next_sd_nnO0wM5KzC8wJZbg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nnO0wM5KzC8wJZbg');
    }
  }

  async sd_Q6TVsltlO200mSdF(bh) {
    try {
      let requestOptions = {
        url: bh.input.castUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.castData = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_2zRrPFgyMV7jnMRW(bh);
      //appendnew_next_sd_Q6TVsltlO200mSdF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Q6TVsltlO200mSdF');
    }
  }

  async sd_2zRrPFgyMV7jnMRW(bh) {
    try {
      bh.input.castData = bh.input.castData.cast;

      //appendnew_next_sd_2zRrPFgyMV7jnMRW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2zRrPFgyMV7jnMRW');
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
  //appendnew_flow_movieDetails_Catch
}
