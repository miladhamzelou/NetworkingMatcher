import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMapComponent } from './users-map/users-map.component';
import {RouterModule, Routes} from '@angular/router'
import {AgmCoreModule} from '@agm/core'
import { UserPickLocationComponent } from './user-pick-location/user-pick-location.component'
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatSliderModule} from '@angular/material'
import {SharedModule} from '../shared/shared.module'
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms';


const mapsRoutes: Routes = [
  { path: 'users-map',  component: UsersMapComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mapsRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8eJ4NjIFWy0tABOEasmykdAj8e7aenL0',
      libraries: [
        "places",
        "geometry"
      ]
    }),
    SharedModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  declarations: [
    UsersMapComponent,
    UserPickLocationComponent,
  ],
  exports: [
    UserPickLocationComponent,
  ],
  entryComponents: [
    UserPickLocationComponent,
  ],
})
export class MapsModule { }
