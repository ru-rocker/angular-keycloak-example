import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'car-showroom',
          clientId: 'employee',
        },
        initOptions: {
            onLoad: 'check-sso',
            pkceMethod: 'S256', 
            // must match to the configured value in keycloak
            redirectUri: 'http://localhost:4200/',   
            // this will solved the error 
            checkLoginIframe: false
          }
    });
}