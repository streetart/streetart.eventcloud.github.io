import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_CONFIG, AppConfig} from './app.config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';;


import {AppComponent} from './app.component';
import {WeatherListComponent} from './weather/weather-list.component';
import {WeatherItemComponent} from './weather/weather-item.component';
import {WeatherSearchComponent} from './weather/weather-search.component';
import {WeatherService} from './weather/weather.service';
import {HeaderComponent} from './header/header.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {WeatherTodayComponent} from './weather-today/weather-today.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import { BaseComponent } from './templates/base/base.component';
import {WeatherIconsComponent} from './components/weather-icons/weather-icons.component';

/** ONLY IMPORT ENTRY COMPONENTS */
import {AppMaterialModule} from './shared/material.module'

// import {TranslateModule} from '@ngx-translate/core';

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        /** App Modules */
        AppMaterialModule,

    ],

    declarations: [
        AppComponent,
       WeatherSearchComponent,
        WeatherListComponent,
        WeatherItemComponent,
        HeaderComponent,
        PageNotFoundComponent,
        WeatherTodayComponent,
        SideNavComponent,
        BaseComponent,
        WeatherIconsComponent

    ],

    providers: [WeatherService, {provide: APP_CONFIG, useValue: AppConfig}],
    bootstrap: [AppComponent]
})
export class AppModules {
}
