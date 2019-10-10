import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UlpageComponent } from './ulpage/ulpage.component';
import { MlpageComponent } from './mlpage/mlpage.component';
import { UnotifComponent } from './unotif/unotif.component';
import { ChkoutpgComponent } from './chkoutpg/chkoutpg.component';
import { UtcompleteComponent } from './utcomplete/utcomplete.component';
import { MtcompleteComponent } from './mtcomplete/mtcomplete.component';
import { UtprogressComponent } from './utprogress/utprogress.component';
import { TsresultsComponent } from './tsresults/tsresults.component';
import { TprofileComponent } from './tprofile/tprofile.component';
import { MpstatusComponent } from './mpstatus/mpstatus.component';
import { MphistoryComponent } from './mphistory/mphistory.component';
import { MtprogressComponent } from './mtprogress/mtprogress.component';
import { EskillsComponent } from './eskills/eskills.component';
import { AlpageComponent } from './alpage/alpage.component';
import { AddblockComponent } from './addblock/addblock.component';
import { EtechComponent } from './etech/etech.component';
import { CcrateComponent } from './ccrate/ccrate.component';
import { MnotifComponent } from './mnotif/mnotif.component';
import { SignupService } from './signup/signup.service';
import { SigninService } from './signin/signin.service';
import { MSignupComponent } from './msignup/msignup.component';
import { MSignupService } from './msignup/msignup.service';
import { HomepageService } from './homepage/homepage.service';
import { ResultsService } from './tsresults/tsresults.service';
import { StorageService } from './homepage/storage.service';
import { UtProgressService } from './utprogress/utprogress.service';
import { UtCompleteService } from './utcomplete/utcomplete.service';
import { LoadingscreenComponent } from './loadingscreen/loadingscreen.component';
import { MtProgressService } from './mtprogress/mtprogress.service';
import { MtCompleteService } from './mtcomplete/mtcomplete.service';
import { MpStatusService } from './mpstatus/mpstatus.service';
import { EskillsService } from './eskills/eskills.service';
import { MpHistoryService } from './mphistory/mphistory.service';
import { EtechService } from './etech/etech.service';
import { SearchComponent } from './search/search.component';
import { AddtrainingComponent } from './addtraining/addtraining.component';
import { AddTrainingService } from './addtraining/addtraining.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SigninComponent,
    SignupComponent,
    UlpageComponent,
    MlpageComponent,
    UnotifComponent,
    ChkoutpgComponent,
    UtcompleteComponent,
    MtcompleteComponent,
    UtprogressComponent,
    TsresultsComponent,
    TprofileComponent,
    MpstatusComponent,
    MphistoryComponent,
    MtprogressComponent,
    EskillsComponent,
    AlpageComponent,
    AddblockComponent,
    EtechComponent,
    CcrateComponent,
    MnotifComponent,
    MSignupComponent,
    LoadingscreenComponent,
    SearchComponent,
    AddtrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SignupService, SigninService, MSignupService, HomepageService, ResultsService, StorageService, UtProgressService, UtCompleteService, MtProgressService, MtCompleteService, MpStatusService, EskillsService, MpHistoryService, EtechService, AddTrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
