import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolioTitle.component';
import { TopRibbon } from './TopRibbon/portfolioTopRibbon.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [AppComponent, PortfolioComponent, TopRibbon],
  bootstrap: [AppComponent],
})
export class AppModule {}
