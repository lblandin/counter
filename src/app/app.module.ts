import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: []
})
export class AppModule { }
