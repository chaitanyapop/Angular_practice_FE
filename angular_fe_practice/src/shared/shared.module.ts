import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeTileComponent } from './component/recipe-tile/recipe-tile.component';
import { HomeComponent } from './component/home/home/home.component';
import { ProfileComponent } from './component/profile/profile/profile.component';
import { SettingsComponent } from './component/settings/settings/settings.component';

@NgModule({
  declarations: [
    RecipeTileComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [CommonModule],
  exports: [
    RecipeTileComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
  ],
})
export class SharedModule {}
