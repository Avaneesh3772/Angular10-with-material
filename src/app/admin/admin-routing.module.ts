import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloseQuarterComponent } from './close-quarter/close-quarter.component';
import { LeCalculationComponent } from './le-calculation/le-calculation.component';
import { RoundingModelCalculationComponent } from './rounding-model-calculation/rounding-model-calculation.component';

const routes: Routes = [
  { path: '', children: [
      { path: 'close-quarter', component: CloseQuarterComponent},
      { path: 'le-calculation', component: LeCalculationComponent},
      { path: 'rounding-model-calculation', component: RoundingModelCalculationComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
