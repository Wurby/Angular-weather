import {
  Injectable,
  ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (accept) => {
          resolve(accept);
        },
        (fail) => {
          reject(fail);
        }
      );
    });
  }
}
