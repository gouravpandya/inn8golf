import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ShowErrorsComponent } from './show-error/show-errors.component';
import { FormsModule } from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ErrorComponent } from './error/error.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        ShowErrorsComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ProgressSpinnerModule

    ],
    exports: [HeaderComponent, SidebarComponent, FooterComponent, ShowErrorsComponent, ErrorComponent]
})
export class CommonComponentModule { }
