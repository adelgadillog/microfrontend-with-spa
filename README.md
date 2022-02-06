# microfrontend-with-spa
# Single spa

Es un framework que permite reunir múltiples microfrontends de JavaScript en una aplicación frontend.

### instalar Single spa

npm install --global create-single-spa

### crear proyecto single spa

create-single-spa

### configurar routing

```
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
```

Se debe agregar el componente: EmptyRouteComponent al app.module

modificar el script start:

ng s --project app --disable-host-check --port #port--deploy-url [http://localhost:port/](http://localhost:4200/) --live-reload false
