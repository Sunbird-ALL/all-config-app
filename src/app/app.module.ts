import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './configurable-appliance/components/notfound/notfound.component';
import { ContentService } from './configurable-appliance/service/content.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
         ContentService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
