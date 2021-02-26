import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AngularMaterialModule } from '../shared/AngularMaterial.module';
import { SharedModule } from '../shared/shared.module';
import { CloseQuarterComponent } from './close-quarter/close-quarter.component';
import { LeCalculationComponent } from './le-calculation/le-calculation.component';
import { RoundingModelCalculationComponent } from './rounding-model-calculation/rounding-model-calculation.component';



@NgModule({
  declarations: [
    CloseQuarterComponent,
    LeCalculationComponent,
    RoundingModelCalculationComponent
  ],
  imports: [
    AdminRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class AdminModule { }
