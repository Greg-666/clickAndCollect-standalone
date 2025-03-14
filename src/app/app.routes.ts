import {Routes} from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./features/home/pages/home/home.component").then(
				m => m.HomeComponent,
			),
	},
	{
		path: "client",
		loadComponent: () =>
			import("./features/client/client.component").then(
				c => c.ClientComponent,
			),
	},

	{
		path: "register",
		loadComponent: () =>
			import("./core/register/register.component").then(
				m => m.RegisterComponent,
			),
	},
	{
		path: "login",
		loadComponent: () =>
			import("./core/login/login.component").then(m => m.LoginComponent),
	},
	{
		path: "client",
		loadComponent: () =>
			import("./features/client/client.component").then(
				m => m.ClientComponent,
			),
	},
	{
		path: "commande-client",
		loadComponent: () =>
			import("./features/commande-client/commande-client.component").then(
				m => m.CommandeClientComponent,
			),
	},
	{
		path: "produits",
		loadComponent: () =>
			import("./features/produits/produit/produit.component").then(
				m => m.ProduitComponent,
			),
	},

	{
		path: "resume",
		loadComponent: () =>
			import("./features/resume/resume.component").then(
				c => c.ResumeComponent,
			),
	},
];
