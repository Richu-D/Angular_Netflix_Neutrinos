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
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { movieDetails } from 'app/sd-services/movieDetails'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-movieDetails',
  templateUrl: './movieDetails.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class movieDetailsComponent {
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
      this.movieAndCastInfo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { movieData: undefined, castData: undefined });

    //append_listeners
  }

  movieAndCastInfo(bh) {
    try {
      bh = this.sd_Sgj8olesXKMSqVej(bh);
      //appendnew_next_movieAndCastInfo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8oJLQ1K8XImgWWnQ');
    }
  }

  gotoTrailer(id = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};

      bh = this.sd_ukVVFeWQE24KPhp9(bh);
      //appendnew_next_gotoTrailer
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bPa2Aclix8IiiyAv');
    }
  }

  //appendnew_flow_movieDetailsComponent_start

  sd_Sgj8olesXKMSqVej(bh) {
    try {
      bh.input.route = this.__page_injector__.get(ActivatedRoute);

      bh = this.sd_ywGcqIIFCEQoCAgF(bh);
      //appendnew_next_sd_Sgj8olesXKMSqVej
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sgj8olesXKMSqVej');
    }
  }

  sd_ywGcqIIFCEQoCAgF(bh) {
    try {
      bh.local.secret = bh.system.environment.properties.API_SECRET;

      bh = this.sd_h2xYqOO2SBIj67MS(bh);
      //appendnew_next_sd_ywGcqIIFCEQoCAgF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywGcqIIFCEQoCAgF');
    }
  }

  sd_h2xYqOO2SBIj67MS(bh) {
    try {
      const page = this.page;

      bh.input.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        bh.input.castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${bh.local.secret}`;
        bh.input.movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${bh.local.secret}`;
      });

      bh = this.sd_Lbj8SPJs2pLZxhw5(bh);
      //appendnew_next_sd_h2xYqOO2SBIj67MS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h2xYqOO2SBIj67MS');
    }
  }

  async sd_Lbj8SPJs2pLZxhw5(bh) {
    try {
      const movieDetailsInstance: movieDetails =
        this.__page_injector__.get(movieDetails);

      let outputVariables = await movieDetailsInstance.sd_JeJpyXJhVEP56Ugl(
        bh.input.movieDetailsUrl,
        undefined,
        undefined,
        bh.input.castUrl
      );
      this.page.movieData = outputVariables.input.movieData;
      this.page.castData = outputVariables.input.castData;

      //appendnew_next_sd_Lbj8SPJs2pLZxhw5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Lbj8SPJs2pLZxhw5');
    }
  }

  sd_ukVVFeWQE24KPhp9(bh) {
    try {
      bh.local.secret = bh.system.environment.properties.API_SECRET;
      bh.local.baseUrl = bh.system.environment.properties.BASE_URL;

      bh = this.sd_0c7pQDuvfN9D9nV8(bh);
      //appendnew_next_sd_ukVVFeWQE24KPhp9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ukVVFeWQE24KPhp9');
    }
  }

  sd_0c7pQDuvfN9D9nV8(bh) {
    try {
      const page = this.page;
      bh.local.url = `${bh.local.baseUrl}/movie/${bh.input.id}/videos?api_key=${bh.local.secret}&language=en-US`;

      bh = this.sd_LitCX4VpCc3uCP7n(bh);
      //appendnew_next_sd_0c7pQDuvfN9D9nV8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0c7pQDuvfN9D9nV8');
    }
  }

  async sd_LitCX4VpCc3uCP7n(bh) {
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

      bh = this.sd_V0OFQx9i9T6h8Qjc(bh);
      //appendnew_next_sd_LitCX4VpCc3uCP7n
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LitCX4VpCc3uCP7n');
    }
  }

  sd_V0OFQx9i9T6h8Qjc(bh) {
    try {
      const page = this.page;
      bh.local.trailer = bh.local.responce.results.find(
        (video) => video.type === 'Trailer'
      ).key;
      console.log(bh.local.trailer);
      window.open(
        `https://www.youtube.com/embed/${bh.local.trailer}`,
        '_blanck'
      );

      //appendnew_next_sd_V0OFQx9i9T6h8Qjc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V0OFQx9i9T6h8Qjc');
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
  //appendnew_flow_movieDetailsComponent_Catch
}
