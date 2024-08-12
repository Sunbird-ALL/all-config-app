import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            // {
            //     label: 'Enable Authoring',
            //     items: [
            //         { label: 'Global Config', icon: 'pi pi-fw pi-box', routerLink: ['/content/galobal-config/list'] },
            //     ]
            // },
            {
                label: 'Content Service',
                items: [
                    { label: 'Stories', icon: 'pi pi-fw pi-bookmark', routerLink: ['/content/story/list'] },
                    { label: 'Word & Sentence', icon: 'pi pi-fw pi-bars', routerLink: ['/content/word-sentence/list'] },
                    { label: 'Targets', icon: 'pi pi-fw pi-globe', routerLink: ['/content/list', 'target'] },
                    { label: 'Familarity', icon: 'pi pi-fw pi-link', routerLink: ['/content/list', 'familarity'] }

                ]
            },
            // {
            //     label: 'Word & Sentence List',
            //     items: [
            //         { label: 'Word & Sentence', icon: 'pi pi-fw pi-bars', routerLink: ['/content/word-sentence/list'] },
            //     ]
            // },
            
        ];
    }
}
