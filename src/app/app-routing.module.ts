import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }  from './page-not-found.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import {WeatherListComponent} from './weather/weather-list.component';
import {BaseComponent} from './templates/base/base.component';

const routes: Routes = [
  // { path: '', component: WeatherSearchComponent},
    {path: 'base', component: BaseComponent},
    { path: '', redirectTo: '/forecast', pathMatch: 'full' },
  { path: 'list', component: WeatherListComponent},
  { path: 'today', component: WeatherTodayComponent},
  { path: 'forecast', component: WeatherSearchComponent },
  { path: 'weather', component: WeatherTodayComponent },


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }



