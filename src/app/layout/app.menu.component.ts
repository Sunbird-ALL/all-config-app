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
            {
                label: 'Enable Authoring',
                items: [
                    { label: 'Global Config', icon: 'pi pi-fw pi-box', routerLink: ['/content/global-config/list'] },
                ]
            },
            {
                label: 'Story List',
                items: [
                    { label: 'Stories', icon: 'pi pi-fw pi-bookmark', routerLink: ['/content/story/list'] },
                ]
            },
            {
                label: 'Word & Sentence List',
                items: [
                    { label: 'Word & Sentence', icon: 'pi pi-fw pi-bars', routerLink: ['/content/word-sentence/list'] },
                ]
            },
            
        ];
    }
}
