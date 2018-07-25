import {Component, NgModule, OnInit, ViewChild} from '@angular/core';

import { trigger, transition, group, query, style, animate } from '@angular/animations';
import {MatButton, MatIcon, MatToolbar, MatMenu, MatSidenav} from '@angular/material';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MatSidenav;

    reason = '';

    options = {
        timeOut: 3000,
        clickIconToClose: true,
        showProgressBar: true,
        maxStack: 1,
        position: ["bottom", "right"],
        animate: 'fromRight'
    };
  constructor() { }

  ngOnInit() {
  }

}
