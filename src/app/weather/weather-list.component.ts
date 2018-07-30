import { Component, OnInit, Input} from '@angular/core';
import { Weather } from './weather';
import { WEATHER_LIST } from './weather.data';
import { WeatherService } from './weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
  @Input('city') cityName: String;
  @Input('WeatherForecastList') weathers: any;
  errorMessage: string;

  constructor(private _weatherService: WeatherService,
              private router: Router) {
    console.log(this.cityName);
  }

  ngOnInit():any {
    this.weathers = WEATHER_LIST;
    this.weathers = this._weatherService.getWeatherItems();
    console.log(this.cityName);

    this._weatherService.getWeatherForecast('Amritsar')
         .subscribe(data => {this.weathers = data},
                    error =>  this.errorMessage = <any>error
     );
    }

    gotoDetailpage(id: number): any {
      this.router.navigate(['/detail-page', id]);
    }

}
