// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    //API en clever 07/03/2023 debe ser https
    _URLServer: "https://app-292e9124-29e5-4423-8807-95ee511d20cf.cleverapps.io/api",
  
    URLServer: "http://localhost:3000",
  
    firebaseConfig: {
      apiKey: "AIzaSyACEO1buJ-0RIK7RWIryqQOXW6Er9oxLzY",
      authDomain: "m19inmobiliaria-f6068.firebaseapp.com",
      projectId: "m19inmobiliaria-f6068",
      storageBucket: "m19inmobiliaria-f6068.appspot.com",
      messagingSenderId: "178223678014",
      appId: "1:178223678014:web:46f51215a29dcdd446876f"
    },
    firebaseCBooklog: { 
      apiKey: "AIzaSyCsYFyetJrFIH9NA82tz1aUdxK3GBOxut0",
      authDomain: "m19-logbook.firebaseapp.com",
      projectId: "m19-logbook",
      storageBucket: "m19-logbook.appspot.com",
      messagingSenderId: "669028837862",
      appId: "1:669028837862:web:0ba4dbbc4d714056fc0e27",
      measurementId: "G-YHKZ1EJ768"
    }
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.