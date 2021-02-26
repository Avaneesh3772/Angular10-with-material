import { NgModule } from '@angular/core';

import { RestatementRoutingModule } from './restatement-routing.module';
import { AngularMaterialModule } from '../shared/AngularMaterial.module';
import { SharedModule } from '../shared/shared.module';
import { InitiateAndDefineComponent } from './initiate-and-define/initiate-and-define.component';
import { TrackAndActionComponent } from './track-and-action/track-and-action.component';
import { RestatedReportsComponent } from './restated-reports/restated-reports.component';
import { TrackComponent } from './track/track.component';


@NgModule({
  declarations: [
    InitiateAndDefineComponent,
    TrackAndActionComponent,
    RestatedReportsComponent,
    TrackComponent
  ],
  imports: [
    RestatementRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class RestatementModule { }
