import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgIf],
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
}


