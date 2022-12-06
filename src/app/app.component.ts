import { Component, OnInit } from '@angular/core';
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(protected keycloakService: KeycloakService) {
  }
  
  title = 'Showroom';
  isExpanded = true;
  isLoggedIn = false;
  
  async ngOnInit(): Promise<void> {

    const token = this.keycloakService.getKeycloakInstance().tokenParsed;
    let groups = '';
    if(token) {
      groups = token['groups'];
    }
    
    this.isLoggedIn = await this.keycloakService.isLoggedIn();
  }

  logout() {
    this.keycloakService.logout();
  }

}
