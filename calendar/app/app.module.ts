import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonDirectivesModule } from './navigation/directives/common-directives.module';
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepthComponents } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
import { COMMON_DIRECTIVES } from './navigation/directives';
import { routing } from "./app.routing";
import { AppComponent } from "./navigation/app.component";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        CommonDirectivesModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        routing,
        NativeScriptUICalendarModule,
        NativeScriptModule
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    declarations: [
        AppComponent,
        ExamplesListDepthComponents,
        OptionsComponent,
    ],
    providers: [
        OptionsService,
        ExampleItemService,
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
