import { Component , ViewChild} from '@angular/core';
import { IonTabs} from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
 
export class TabsPage {
constructor(private route: ActivatedRoute , public platform : Platform) {}
}