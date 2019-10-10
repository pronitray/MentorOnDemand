import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MSignupComponent } from './msignup/msignup.component';
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
import { LoadingscreenComponent } from './loadingscreen/loadingscreen.component';
import { SearchComponent } from './search/search.component';
import { AddtrainingComponent } from './addtraining/addtraining.component';
const routes: Routes = [
  {path: '', pathMatch:'full', component: HomepageComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'msignup', component: MSignupComponent},
  {path: 'ulpage', component: UlpageComponent},
  {path: 'mlpage', component: MlpageComponent},
  {path: 'notif', component: UnotifComponent},
  {path: 'checkout', component: ChkoutpgComponent},
  {path: 'utcomplete', component: UtcompleteComponent},
  {path: 'mtcomplete', component: MtcompleteComponent},
  {path: 'utprogress', component: UtprogressComponent},
  {path: 'tsresults', component: TsresultsComponent},
  {path: 'tprofile', component: TprofileComponent},
  {path: 'mpstatus', component: MpstatusComponent},
  {path: 'mphistory', component: MphistoryComponent},
  {path: 'mtprogress', component: MtprogressComponent},
  {path: 'eskills', component: EskillsComponent},
  {path: 'alpage', component: AlpageComponent},
  {path: 'addblock', component: AddblockComponent},
  {path: 'etech', component: EtechComponent},
  {path: 'ccrate', component: CcrateComponent},
  {path: 'mnotif', component: MnotifComponent},
  {path: 'loading', component: LoadingscreenComponent},
  {path: 'search', component: SearchComponent},
  {path: 'addtraining', component: AddtrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
