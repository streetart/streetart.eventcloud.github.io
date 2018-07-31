import {Component, Input} from '@angular/core';
import {Weather} from './weather';
import {GraphsComponent} from '../components/graphs/graphs.component';

@Component({
    selector: 'weather-item',
    templateUrl: './weather-item.component.html',
    styleUrls: ['./weather-item.component.scss'],
    // inputs: ['weatherItem']
})
export class WeatherItemComponent {
    @Input('WeatherItem') weather: Weather;
    @Input('GrapItem') graph: GraphsComponent;

    constructor(){
      this.weather = new Weather('Cape Town', 'Cloudy', 24);
      this.graph = new GraphsComponent();
    }
}
