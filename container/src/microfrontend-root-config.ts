import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@microfrontend/mf-app1",
  app: () =>
    System.import(
      "@microfrontend/mf-app1"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@microfrontend/mf-app2",
  app: () =>
    System.import(
      "@microfrontend/mf-app2"
    ),
  activeWhen: ["/"],
});



start({
  urlRerouteOnly: true,
});
