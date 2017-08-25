import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const desc = Object.getOwnPropertyDescriptor(window, 'onbeforeunload');
if (desc) {
    const oriGet = desc.get;
    const oriSet = desc.set;
    const preDefinedEvent = document.createEvent('Event');
    preDefinedEvent.initEvent('beforeunload', false, true);
    Object.defineProperty(window, 'onbeforeunload', {
        configurable: true,
        get: function () {
          const wrapFn = oriGet.apply(this, arguments);
          if (wrapFn) {
            return function() {
              const args = Array.prototype.slice.call(arguments);
              let evt = args.length === 0 ? preDefinedEvent : args[0];
              return wrapFn.apply(this, [evt]);
            }
          }
          return wrapFn;
        }
    });
}

window.onbeforeunload = function () {
    console.log('a');
};

platformBrowserDynamic().bootstrapModule(AppModule);
