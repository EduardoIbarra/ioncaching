import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { PlacePage } from '../place/place';
import {SettingsPage} from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = FeedPage;
  tab3Root = PlacePage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
