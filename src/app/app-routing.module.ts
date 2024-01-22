import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './configurable-appliance/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'content/global-config/list'
              }, 
            {
                path: 'content', component: AppLayoutComponent,
                children: [
                    { path: 'global-config/list', loadChildren: () => import('./configurable-appliance/components/config-app/global-config/global-config.module').then(m => m.GlobalConfigModule) },
                    { path: 'story/list', loadChildren: () => import('./configurable-appliance/components/config-app/story-list/story.module').then(m => m.StoryModule) },
                    { path: 'word-sentence/list', loadChildren: () => import('./configurable-appliance/components/config-app/word-sentence/word-sentence.module').then(m => m.WordSentenceModule) },
                ]
            },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
