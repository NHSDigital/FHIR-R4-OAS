import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';
import {ActivatedRoute} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
  @ViewChild('swagger') swaggerDom: ElementRef<HTMLDivElement>;

  constructor(private route: ActivatedRoute) { }

  url = 'https://raw.githubusercontent.com/NHSDigital/FHIR-R4-OAS/main/oas/eRS-Futures.json'


  ngOnInit(): void {
    this.doSetup();
    this.route.url.subscribe(url => {
      this.doSetup();
    });

  }
  // https://stackblitz.com/edit/angular-swagger-ui-integration?file=src%2Fapp%2Fapp.component.ts
  // tslint:disable-next-line:typedef
  ngAfterViewInit() {

    const ui = SwaggerUIBundle({
      url: this.url,
      domNode: this.swaggerDom.nativeElement,
      deepLinking: true,
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset.slice(1)],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: 'StandaloneLayout',
      operationsSorter: 'alpha'
    });
    ui.onComplete();
  }

  // tslint:disable-next-line:typedef
  doSetup() {

    const tempid = this.route.snapshot.paramMap.get('oasurl');
    if (tempid !== null) {
      this.url = 'https://raw.githubusercontent.com/NHSDigital/FHIR-R4-OAS/main/oas/' + tempid + '.json';
    }
  }
}
