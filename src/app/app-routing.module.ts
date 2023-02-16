import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsDataComponent } from './components/admins-data/admins-data.component';
import { ContentCreatorComponent } from './components/content-creator/content-creator.component';
import { LoginComponent } from './components/login/login.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { VideoReviewComponent } from './components/video-review/video-review.component';
import { AdminIsLoginGuard } from './guards/admin-is-login.guard';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: LoginComponent },
  {
    path: 'Home',
    component: MainlayoutComponent,
    canActivate : [AdminIsLoginGuard] ,
    children: [
      { path: 'VideoReview', component: VideoReviewComponent },
      { path: 'ContentCreators', component: ContentCreatorComponent },
      { path: 'AdminsData' , component: AdminsDataComponent}
    ]
  },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
