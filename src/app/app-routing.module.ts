import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './configurable-appliance/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './configurable-appliance/guards/auth-guard.guard';
import { AccessForbiddenComponent } from './configurable-appliance/components/access-forbidden/access-forbidden.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'configuration/login'
            }, 
            {
                path: 'configuration/login',
                loadChildren:() => import('./configurable-appliance/components/config-app/config-login/config-login.module').then(m => m.ConfigLoginModule),
              }, 
            {
                path: 'content', component: AppLayoutComponent,
                children: [
                    { path: 'global-config/list', loadChildren: () => import('./configurable-appliance/components/config-app/global-config/global-config.module').then(m => m.GlobalConfigModule) },
                    { path: 'story/list', loadChildren: () => import('./configurable-appliance/components/config-app/story-list/story.module').then(m => m.StoryModule) },
                    { path: 'word-sentence/list', loadChildren: () => import('./configurable-appliance/components/config-app/word-sentence/word-sentence.module').then(m => m.WordSentenceModule) },
                    {path : 'config',loadChildren : () => import('./configurable-appliance/components/config-app/global-api-host/global-api-host.module').then(m => m.GlobalConfigModule)},
                    {path : 'list/:type',loadChildren : () => import('./configurable-appliance/components/config-app/target-list/target.module').then(m => m.TargetModule)},
                ],
                canActivate:[AuthGuard]
            },
            {
                path: 'adaptive-learning/list',component: AppLayoutComponent,
                loadChildren:() => import('./configurable-appliance/components/config-app/adaptive-learning/adaptive-learning.module').then(m => m.AdaptiveLearningModule),
                canActivate:[AuthGuard]
            }, 
            { path: 'notfound', component: NotfoundComponent },
            { path: 'forbidden', component: AccessForbiddenComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload',  useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
