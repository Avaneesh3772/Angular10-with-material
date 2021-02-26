import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppInitializerDataService } from '../app-services/app-initializer-data.service';
import { AppCommonService } from '../app-services/app.common.service';
import { DialogNotAuthorizedComponent } from '../dialog-not-authorized/dialog-not-authorized.component';

@Injectable({
  providedIn: 'root'
})


export class RestatementGuard implements CanLoad {
  public appConfigData: any;

  constructor( private appInitializerDataService: AppInitializerDataService,
    private appCommonService: AppCommonService) {
      this.appConfigData = this.appInitializerDataService.getAppConfigartionData();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const checkCondition = this.appConfigData.roles.includes('restatement')
      if(checkCondition) {
           return true;
      } else {
        this.appCommonService.openNotAuthorizedDialogBox(DialogNotAuthorizedComponent);
           return false;
      }
    }
}


