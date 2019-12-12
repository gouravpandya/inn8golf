import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ShowErrorsComponent } from './show-error/show-errors.component';
import { FormsModule } from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        ShowErrorsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ProgressSpinnerModule

    ],
    exports: [HeaderComponent, SidebarComponent, FooterComponent, ShowErrorsComponent]
})
export class CommonComponentModule { }
