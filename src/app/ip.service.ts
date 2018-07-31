import { Injectable } from "../../node_modules/@angular/core";
import { Http } from '@angular/http';

@Injectable()

export class IpService {
    constructor(private http: Http) { }
    getIp() {
        return this.http.get('http://ip.jsontest.com/')
            .toPromise()
            .then(res => res.json())
            .then(resJson => resJson.ip);
    }
}