import { Component } from '@angular/core';
import { HomeComponent } from '../../../../shared/component/home/home/home.component';
import { ProfileComponent } from '../../../../shared/component/profile/profile/profile.component';
import { SettingsComponent } from '../../../../shared/component/settings/settings/settings.component';

@Component({
  selector: 'app-tab-switch',
  standalone: false,
  templateUrl: './tab-switch.component.html',
  styleUrl: './tab-switch.component.scss',
})
export class TabSwitchComponent {
  tabSwitchArray = [
    { label: 'Home', content: HomeComponent },
    { label: 'Profile', content: ProfileComponent },
    { label: 'Setting', content: SettingsComponent },
  ];
  selectedTab = this.tabSwitchArray[0];

  tabSwitchController(data: any) {
    this.selectedTab = data;
  }
}
