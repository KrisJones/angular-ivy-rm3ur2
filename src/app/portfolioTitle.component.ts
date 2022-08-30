import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolioTitle',
  template: `<h1>Kristofor's Portfolio!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class PortfolioComponent {
  @Input() name: string;
}
