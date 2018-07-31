import {ChangeDetectorRef, ViewChild, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

import { trigger, transition, group, query, style, animate } from '@angular/animations';
import {MatSidenav} from '@angular/material';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnDestroy{
    mobileQuery: MediaQueryList;
    fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

    private _mobileQueryListener: () => void;
    @ViewChild('sidenav') sidenav: MatSidenav;

    reason = '';

    options = {
        timeOut: 3000,
        clickIconToClose: true,
        showProgressBar: true,
        maxStack: 1,
        position: ['bottom', 'right'],
        animate: 'fromRight'
    };
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}
