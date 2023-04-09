import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-SearchComponent
import { SearchComponent } from '../components/Layout/Search/Search.component';
//CORE_REFERENCE_IMPORT-movieDetails
import { movieDetails } from '../sd-services/movieDetails';
//CORE_REFERENCE_IMPORT-movieDetailsComponent
import { movieDetailsComponent } from '../components/Layout/MovieDetails/movieDetails.component';
//CORE_REFERENCE_IMPORT-discoverRequest
import { discoverRequest } from '../sd-services/discoverRequest';
//CORE_REFERENCE_IMPORT-PostersComponent
import { PostersComponent } from '../components/Components/Posters/Posters.component';
//CORE_REFERENCE_IMPORT-NavbarComponent
import { NavbarComponent } from '../components/Components/Navbar/Navbar.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/Layout/Home/Home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-SearchComponent
  SearchComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-movieDetailsComponent
  movieDetailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-PostersComponent
  PostersComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-NavbarComponent
  NavbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-movieDetails
  movieDetails,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-discoverRequest
  discoverRequest,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'movieDetails/:id', component: movieDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
