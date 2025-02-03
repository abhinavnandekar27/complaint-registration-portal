import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
#api_key = "1234567890abcdef"
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
