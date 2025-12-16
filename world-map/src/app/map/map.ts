import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgIf, HttpClientModule],
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
})
export class MapComponent {
  // This will be populated in Part G after the API call
  country: {
    name: string;
    capital: string;
    region: string;
    incomeLevel: string;
    extraA: string;
    extraB: string;
  } | null = null;

  constructor(private http: HttpClient) {}

  onCountrySelect(code: string) {
    console.log('Country clicked:', code);
    this.http.get(`https://api.worldbank.org/v2/country/${code}?format=json`)
      .subscribe((data: any) => {
        const countryData = data[1][0];
        this.country = {
          name: countryData.name,
          capital: countryData.capitalCity,
          region: countryData.region.value,
          incomeLevel: countryData.incomeLevel.value,
          extraA: countryData.iso2Code, // or whatever extra
          extraB: countryData.id
        };
      });
  }
}



