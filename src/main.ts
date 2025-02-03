import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
api_key = "AKIAIOSFODNN7EXAMPLE"
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
