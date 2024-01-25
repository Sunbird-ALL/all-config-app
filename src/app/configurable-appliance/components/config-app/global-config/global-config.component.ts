import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { AppConfig } from 'src/app/configurable-appliance/interface/content.interface';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';

@Component({
    selector: 'app-global-config',
    templateUrl: './global-config.component.html',
    styleUrls: ['./global-config.component.scss'],
})
export class GlobalConfigComponent implements OnInit {
    authoringConfig: any;
    selectedOption: any;
    configIdList = [];
    messages!: Message[];
    value: boolean = false;
    addAuthoringForm: FormGroup;
    languageList = AppConfig.languages;
    modesList = AppConfig.modesList;
    enableAuthoringList = AppConfig.enableAuthoringList;

    constructor(
        public formBuilder: FormBuilder,
        private contentService: ContentService
    ) {}

    ngOnInit(): void {
        this.initializeAddForm();
        this.addAuthoringForm.patchValue({
            enableAuthoring: this.value,
        });
        this.getAllAuthoringConfig();
    }

    initializeAddForm() {
        this.addAuthoringForm = this.formBuilder.group({
            configId: [''],
            enableAuthoring: ['', Validators.required],
            languages: ['', Validators.required],
            modes: ['', Validators.required],
            channelId: ['', Validators.required],
            envId: ['', Validators.required],
            pId: ['', Validators.required],
        });
    }

    getAllAuthoringConfig() {
        this.contentService.getAuthoringConfig().subscribe(
            (response: any) => {
                if (response) {
                    this.authoringConfig = response;
                    this.getConfigIdSet(this.authoringConfig);
                }
            },
            (error) => {
                this.messages = [
                    {
                        severity: 'error',
                        detail: error?.error?.params?.errmsg,
                    },
                ];
            }
        );
    }

    getConfigIdSet(configID) {
        configID.forEach((element) => {
            this.configIdList.push(element._id);
        });
    }

    saveData() {
        if (this.selectedOption) {
            const data = {
                enableAuthoring: this.addAuthoringForm.value.enableAuthoring,
                languages: this.addAuthoringForm.value.languages,
                modes: this.addAuthoringForm.value.modes,
            };
            this.contentService
                .editAuthoringConfig(data, this.selectedOption)
                .subscribe(
                    (response: any) => {
                        this.authoringConfig = response[0];
                        console.log(response);

                        this.messages = [
                            {
                                severity: 'info',
                                detail: `Config Updated ${this.selectedOption}`,
                            },
                        ];
                    },
                    (error) => {
                        this.messages = [
                            {
                                severity: 'error',
                                detail: error?.error?.params?.errmsg,
                            },
                        ];
                    }
                );
        } else {
            const data = {
                enableAuthoring: this.addAuthoringForm.value.enableAuthoring,
                languages: this.addAuthoringForm.value.languages,
                modes: this.addAuthoringForm.value.modes,
                channelId: this.addAuthoringForm.value.channelId,
                envId: this.addAuthoringForm.value.envId,
                pId: this.addAuthoringForm.value.pId,
            };
            this.contentService.createAuthoringConfig(data).subscribe(
                (response: any) => {
                    this.authoringConfig = response;
                    console.log(this.authoringConfig);
                    this.messages = [
                        {
                            severity: 'info',
                            detail: `New Config Created ${response.config._id}`,
                        },
                    ];
                    // alert(`New Config Created ${response.config._id}`)
                },
                (error) => {
                    this.messages = [
                        {
                            severity: 'error',
                            detail: 'Alreay exist Created',
                        },
                    ];
                }
            );
        }
    }

    onConfigChange(event: any): void {
        const data = {
            enableAuthoring: this.addAuthoringForm.value.enableAuthoring,
            languages: this.addAuthoringForm.value.languages,
            modes: this.addAuthoringForm.value.modes,
        };
        this.contentService.getConfigById(data, this.selectedOption).subscribe(
            (response: any) => {
                this.authoringConfig = response;
                this.AddDetailsForm();
            },
            (error) => {
                this.messages = [
                    {
                        severity: 'error',
                        detail: error?.error?.params?.errmsg,
                    },
                ];
            }
        );
    }

    AddDetailsForm() {
        this.addAuthoringForm = this.formBuilder.group({
            configId: this.selectedOption,
            enableAuthoring: this.formBuilder.control(
                this.authoringConfig.enableAuthoring
            ),
            languages: this.formBuilder.control([
                this.authoringConfig.languages[0],
            ]),
            modes: this.formBuilder.control([this.authoringConfig.modes[0]]),
            channelId: this.authoringConfig.channelId,
            envId: this.authoringConfig.envId,
            pId: this.authoringConfig.pId,
        });
    }
}
