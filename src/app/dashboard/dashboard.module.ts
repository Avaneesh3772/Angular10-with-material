import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularMaterialModule } from '../shared/AngularMaterial.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DialogUserinfoComponent } from './dialog-userinfo/dialog-userinfo.component';


@NgModule({
  declarations: [DashboardComponent, DialogUserinfoComponent],
  imports: [
    DashboardRoutingModule,
    AngularMaterialModule,
    SharedModule,
  ],
})
export class DashboardModule { }
