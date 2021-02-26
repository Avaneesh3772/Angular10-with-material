import { NgModule } from '@angular/core';
import { TemplatesRoutingModule } from './templates-routing.module';
import { AngularMaterialModule } from '../shared/AngularMaterial.module';
import { SharedModule } from '../shared/shared.module';
import { TemplatesComponent } from './templates.component';
import { DialogCreateResourceComponent } from './dialog-create-resource/dialog-create-resource.component';
import { DialogPostCommentsComponent } from './dialog-post-comments/dialog-post-comments.component';

@NgModule({
  declarations: [
    TemplatesComponent,
    DialogCreateResourceComponent,
    DialogPostCommentsComponent
  ],
  imports: [
    TemplatesRoutingModule,
    AngularMaterialModule,
    SharedModule,
  ],
})
export class TemplatesModule { }
