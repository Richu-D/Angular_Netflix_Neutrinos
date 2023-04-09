//append_imports_start

import * as sd_zpXBZRkP0PcNvs8V from 'app/sd-services/discoverRequest'; //_splitter_
import * as sd_Ln5dT2OsZ9YoUrIG from 'app/sd-services/movieDetails'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_zpXBZRkP0PcNvs8V: sd_zpXBZRkP0PcNvs8V.discoverRequest,
    private sd_Ln5dT2OsZ9YoUrIG: sd_Ln5dT2OsZ9YoUrIG.movieDetails
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
