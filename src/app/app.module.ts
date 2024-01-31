import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './configurable-appliance/components/notfound/notfound.component';
import { AccessForbiddenComponent } from './configurable-appliance/components/access-forbidden/access-forbidden.component';
import { ContentService } from './configurable-appliance/service/content.service';
import { AuthGuard } from './configurable-appliance/guards/auth-guard.guard';
import { AuthService } from './configurable-appliance/guards/auth.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,AccessForbiddenComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [AuthGuard, AuthService,ContentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
