import { Component } from '@angular/core';

// Imports pour se lier à l'api de wordpress

import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
]
})
export class AppComponent {
  title = 'Algerian challengers';
  token = null;
}
