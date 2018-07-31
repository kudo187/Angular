import { Injectable } from "../../../node_modules/@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class IpWeatherService {
    constructor(private http: Http) {
    }
    getIpWeather(cityName: string) {
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?appid=472bdb26c791de933d18e6a90180df38&units=metric&q=' + cityName)
            .toPromise()
            .then(res => res.json())
            .then(resJson => resJson.main.temp);
    }

}