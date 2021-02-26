import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './app-guard/admin.guard';
import { DashboardGuard } from './app-guard/dashboard.guard';
import { RestatementGuard } from './app-guard/restatement.guard';
import { RoleGuard } from './app-guard/role.guard';
import { TemplateGuard } from './app-guard/template.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      canLoad: [DashboardGuard]
    },
    {
      path: 'templates',
      loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule),
      canLoad: [TemplateGuard]
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      canLoad: [AdminGuard]
    },
    {
      path: 'role',
      loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
      canLoad: [RoleGuard]
    },
    {
      path: 'restatement',
      loadChildren: () => import('./restatement/restatement.module').then(m => m.RestatementModule),
      canLoad: [RestatementGuard]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
