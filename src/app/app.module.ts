import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HeaderToolbarComponent } from './widgets/header-toolbar/header-toolbar.component';
import { FooterToolbarComponent } from './widgets/footer-toolbar/footer-toolbar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PrayersComponent } from './widgets/dialogs/prayers/prayers.component';
import { LandingPageComponent } from './widgets/landing-page/landing-page.component';
import { LiteraturePageComponent } from './widgets/literature-page/literature-page.component';
import { ReflectionPageComponent } from './widgets/reflection-page/reflection-page.component';
import { LoaderComponent } from './widgets/loader/loader.component';
import { SnackBarComponent } from './widgets/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    FooterToolbarComponent,
    PrayersComponent,
    LandingPageComponent,
    LiteraturePageComponent,
    ReflectionPageComponent,
    LoaderComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatBottomSheetModule,
    MatProgressBarModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
