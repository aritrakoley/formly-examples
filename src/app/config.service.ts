import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pathToFileURL } from 'url';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig(i) {

    let path;
    switch(i) {
      case 1: path = '../assets/config1.json';
        break;
      case 2: path = '../assets/config2.json';
        break;
      default: path = '../assets/config1.json';
    }
    return this.http.get(path);
  }
}
