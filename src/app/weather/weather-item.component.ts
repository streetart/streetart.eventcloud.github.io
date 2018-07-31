import {Component, Input} from '@angular/core';
import {Weather} from './weather';

@Component({
    selector: 'weather-item',
    templateUrl: './weather-item.component.html',
    styleUrls: ['./weather-item.component.scss'],
    // inputs: ['weatherItem']
})
export class WeatherItemComponent {
    @Input('WeatherItem') weather: Weather;

    constructor(){
      this.weather = new Weather('Cape Town', 'Cloudy', 24);
    }
}
