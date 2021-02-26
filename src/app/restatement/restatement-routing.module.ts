import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitiateAndDefineComponent } from './initiate-and-define/initiate-and-define.component';
import { RestatedReportsComponent } from './restated-reports/restated-reports.component';
import { TrackAndActionComponent } from './track-and-action/track-and-action.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  { path: '', children: [
      { path: 'initiate-and-define', component: InitiateAndDefineComponent},
      { path: 'track-and-action', component: TrackAndActionComponent},
      { path: 'track/:id', component: TrackComponent},
      { path: 'restated-reports', component: RestatedReportsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestatementRoutingModule { }
