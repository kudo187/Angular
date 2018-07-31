import { Component, OnInit } from '@angular/core';
import { IpWeatherService } from './ip-weather.service';

@Component({
  selector: 'app-weather-ip',
  templateUrl: './weather-ip.component.html',
  styleUrls: ['./weather-ip.component.css'],
  providers: [IpWeatherService]
})
export class WeatherIPComponent implements OnInit {
  cityName = '';
  txtCityName = '';
  temp = 0;
  isLoading = false;
  constructor(private ipWeather: IpWeatherService) { }

  ngOnInit(): void {
  }
  getIpWeaterService() {
    this.isLoading = true;
    this.ipWeather.getIpWeather(this.txtCityName)
      .then(temp => {
        this.temp = temp;
        this.cityName = this.txtCityName;
        this.isLoading = false;
      })
      .catch(err => {
        alert("Can find your city!!");
        this.txtCityName = '';
        this.cityName = '';
        this.isLoading = false;
      });
  }

  getMessage() {
    if (this.isLoading){
      return "Loading..."
    }
    return this.cityName === '' ? "Enter your city name." : "The temperature of "  + this.cityName +" today: " + this.temp
   }

}
