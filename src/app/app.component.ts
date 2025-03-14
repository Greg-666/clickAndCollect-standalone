import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {LoginComponent} from "./core/login/login.component";
import {RegisterComponent} from "./core/register/register.component";

@Component({
	selector: "app-root",
	imports: [
		RouterOutlet,
		HeaderComponent,
		FooterComponent,
		LoginComponent,
		RegisterComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "clickAndCollect";
}
