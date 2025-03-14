import {Component} from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import {AuthService} from "../../features/auth/services/auth.service";
import {Router} from "@angular/router";
import {LoginForm} from "../models/Login-form";

@Component({
	selector: "app-login",
	imports: [ReactiveFormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
})
export class LoginComponent {
	loginForm!: FormGroup;
	message: any;
	registerForm!: FormGroup;

	constructor(
		private readonly _fb: FormBuilder,
		private readonly _loginService: AuthService,
		private readonly _router: Router,
	) {
		this.loginForm = this._fb.group({
			email: [null, [Validators.required]],
			password: [null, [Validators.minLength(8)]],
		});
	}

	onSubmit() {
		if (!this.loginForm.valid) {
			console.log("votre formulaire n est pas valide");
		}
		let credential: LoginForm = this.loginForm.value;
		this._loginService.login(credential).subscribe({
			next: (data: any) => {
				console.log(data);
				localStorage.setItem("currentUser", JSON.stringify(data));
				this._router.navigate(["/"]);
			},
			error: error => {
				console.log(error);
				return;
			},
		});
	}
}
