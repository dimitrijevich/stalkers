import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUrlTransformService {

  constructor() { }

  transform(url: string): string {
    const urlParts = url.split('/');
    let newUrl = '';

    for (let i = 0; i < urlParts.length; i++) {
      if (i === 2) {
        newUrl += urlParts[i].replaceAll('-', '--').replaceAll('.', '-') + atob('LnRyYW5zbGF0ZS5nb29n') + '/';
      } else if (i !== urlParts.length - 1) {
        newUrl += urlParts[i] + '/';
      } else {
        newUrl += urlParts[i];
      }
    }

    return encodeURI(newUrl);
  }

}
