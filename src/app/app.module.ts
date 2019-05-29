import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { MessageComponent } from './input-output/message/message.component';
import { DataServerComponent } from './data-server/data-server.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ConditionalComponent,
    MessageComponent,
    InputOutputComponent,
    DataServerComponent,
    TemplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
