import {Component, inject} from "@angular/core";
import {Router, RouterLink} from "@angular/router";
import {LinkModel} from "../../features/models/link.model";
import {RegisterComponent} from "../../core/register/register.component";
import {LoginComponent} from "../../core/login/login.component";

@Component({
	selector: "app-header",
	imports: [RouterLink, RegisterComponent, LoginComponent],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
