import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

// @ts-ignore
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
  @ViewChild('swagger') swaggerDom: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {

  }
  // https://stackblitz.com/edit/angular-swagger-ui-integration?file=src%2Fapp%2Fapp.component.ts
  ngAfterViewInit() {
    SwaggerUIBundle({
      urls: [
        {
          name: 'Test',
          url: 'https://petstore.swagger.io/v2/swagger.json'
        }
      ],
      domNode: this.swaggerDom.nativeElement,
      deepLinking: true,
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      layout: 'StandaloneLayout'
    });
  }
}
