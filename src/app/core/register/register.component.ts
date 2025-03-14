import {Component} from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import {AuthService} from "../../features/auth/services/auth.service";
import {Router} from "@angular/router";
import {RegisterForm} from "../models/Register-form";

@Component({
	selector: "app-register",
	imports: [ReactiveFormsModule],
	templateUrl: "./register.component.html",
	styleUrl: "./register.component.scss",
})
export class RegisterComponent {
	registerForm!: FormGroup;
	message: string = "";

	constructor(
		private readonly _fb: FormBuilder,
		private readonly _authService: AuthService,
		private readonly _router: Router,
	) {
		this.registerForm = this._fb.group({
			nom: [null, [Validators.required]],
			prenom: [null, [Validators.required]],
			email: [null, [Validators.required]],
			tel: [null, [Validators.required]],
			password: [null, [Validators.required]],
			adresse: this._fb.group({
				rue: [null, [Validators.required]],
				numero: [null, [Validators.required]],
				codePostal: [null, [Validators.required]],
				ville: [null, [Validators.required]],
			}),
		});
	}
	onSubmit() {
		console.log(this.registerForm.value);
		if (this.registerForm.invalid) {
			console.log("non  valide");
		}
		let credential: RegisterForm = this.registerForm.value;
		console.log("credential");
		this._authService.register(credential).subscribe({
			next: data => {
				console.log("ok");
				console.log(data);
				this.registerForm.reset();
				this.message = "vous avez bien creer le client";
				this._router.navigate(["/"]);
			},
			error: error => {
				console.log(error());
			},
		});
	}
}
