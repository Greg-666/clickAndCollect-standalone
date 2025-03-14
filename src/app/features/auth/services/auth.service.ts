import {inject, Injectable, signal, WritableSignal} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginForm} from "../../../core/models/Login-form";
import {TokenDto} from "../../../core/models/Client.dto";
import {RegisterForm} from "../../../core/models/Register-form";
import {tap} from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private readonly _httpClient = inject(HttpClient);

	CurrentClient: WritableSignal<TokenDto | null> = signal<TokenDto | null>(
		null,
	);

	constructor() {}
	login(form: LoginForm) {
		return this._httpClient.post<TokenDto>(
			"http://localhost:4200/client/login",
			form,
		);
	}
	register(form: RegisterForm) {
		return this._httpClient
			.post<TokenDto>("http//:localhost:4200/register", form)
			.pipe(
				tap(data => {
					localStorage.setItem("currentClient", JSON.stringify(data));
				}),
			);
	}
	logout() {
		localStorage.removeItem("currentClient");
	}
}
