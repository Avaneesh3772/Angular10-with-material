import { NgModule } from '@angular/core';
import { RoleRoutingModule } from './role-routing.module';
import { AngularMaterialModule } from '../shared/AngularMaterial.module';
import { SharedModule } from '../shared/shared.module';
import { RoleComponent } from './role.component';
import { RoleDefinitionComponent } from './role-definition/role-definition.component';
import { RoleAssignmentComponent } from './role-assignment/role-assignment.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { QuarterlyComponent } from './quarterly/quarterly.component';



@NgModule({
  declarations: [
    RoleComponent,
    RoleDefinitionComponent,
    RoleAssignmentComponent,
    MonthlyComponent,
    QuarterlyComponent
  ],
  imports: [
    RoleRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class RoleModule { }
