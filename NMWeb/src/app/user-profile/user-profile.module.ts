import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileBasicInfoComponent } from './user-profile-basic-info/user-profile-basic-info.component';
import {CanDeactivateUserProfileGuard, UserProfileComponent} from './user-profile.component'
import {Routes, RouterModule, ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle} from '@angular/router'
import {SharedModule} from '../shared/shared.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MdAutocompleteModule, MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdTextareaAutosize} from '@angular/material'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {ItemListInputComponent} from './item-list-input/item-list-input.component'
import { UserInterestsComponent } from './user-interests/user-interests.component'
import { UserGeoLocationsComponent } from './user-geo-locations/user-geo-locations.component';
import { UserGeoLocationComponent } from './user-geo-locations/user-geo-location/user-geo-location.component'
import {MapsModule} from '../maps/maps.module';
import { UserDescriptionsComponent } from './user-descriptions/user-descriptions.component';
import { TopicGroupCardComponent } from './user-interests/topic-group-card/topic-group-card.component';
import { TopicGroupSupplyDemandCardComponent } from './user-interests/topic-group-supply-demand-card/topic-group-supply-demand-card.component';
import { TextAreaComponent } from './user-descriptions/text-area/text-area.component';
import { OtherProfileUserNameComponent } from './user-other-profiles/other-profile-user-name/other-profile-user-name.component';
import { UserWebsiteComponent } from './user-other-profiles/user-website/user-website.component'
import {DefaultRouteReuseStrategy} from '@angular/router/src/route_reuse_strategy';
import { CreateTopicComponent } from './user-interests/create-topic/create-topic.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AccordionModule} from 'primeng/primeng'

export const USER_PROFILE_ID_PARAM_NO_COLON = 'userId'

export const USER_ROUTE_WITH_TRAILING_SLASH = 'user/'

const userProfileRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canDeactivate: [CanDeactivateUserProfileGuard],
    // data: { reuse: false },
  },
  {
    path: USER_ROUTE_WITH_TRAILING_SLASH + ':' + USER_PROFILE_ID_PARAM_NO_COLON,
    component: UserProfileComponent,
    // data: { reuse: false },
  },
];

// https://stackoverflow.com/questions/44875644/custom-routereusestrategy-for-angulars-child-module/44876414#44876414
// https://medium.com/@gerasimov.pk/how-to-reuse-rendered-component-in-angular-2-3-with-routereusestrategy-64628e1ca3eb
// https://www.softwarearchitekt.at/post/2016/12/02/sticky-routes-in-angular-2-3-with-routereusestrategy.aspx
// https://stackoverflow.com/questions/41280471/how-to-implement-routereusestrategy-shoulddetach-for-specific-routes-in-angular
// https://medium.com/@juliapassynkova/angular-2-component-reuse-strategy-9f3ddfab23f5
// export class CustomRouteReuseStrategy extends DefaultRouteReuseStrategy {
//   shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//     return false
//     // let name = future.component && (<any>future.component).name;
//     // return super.shouldReuseRoute(future, curr) && name !== 'DetailSameComponent';
//   }
// }

export class CustomRouteReuseStrategy extends RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle { return null !; }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false
    // return future.routeConfig === curr.routeConfig ;
  }
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userProfileRoutes),
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdIconModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdCardModule,
    MapsModule,
    BrowserAnimationsModule,
    AccordionModule
  ],
  declarations: [
    UserProfileComponent,
    UserProfileBasicInfoComponent,
    UserOtherProfilesComponent,
    ItemListInputComponent,
    UserInterestsComponent,
    UserGeoLocationsComponent,
    UserGeoLocationComponent,
    UserDescriptionsComponent,
    TopicGroupCardComponent,
    TopicGroupSupplyDemandCardComponent,
    TextAreaComponent,
    OtherProfileUserNameComponent,
    UserWebsiteComponent,
    CreateTopicComponent,
  ],
  providers: [
    CanDeactivateUserProfileGuard,
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: CustomRouteReuseStrategy
    // },
  ],
  exports: [
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class UserProfileModule { }
