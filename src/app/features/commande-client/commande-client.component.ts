import {Component} from "@angular/core";
import {
	FormArray,
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import {AuthService} from "../auth/services/auth.service";
import {Router} from "@angular/router";
import {RegisterForm} from "../../core/models/Register-form";
import {DataService} from "./services/data.service";

@Component({
	selector: "app-commande-client",
	imports: [ReactiveFormsModule],
	templateUrl: "./commande-client.component.html",
	styleUrl: "./commande-client.component.scss",
})
export class CommandeClientComponent {
	registerForm!: FormGroup;
	message: string = "";

	constructor(
		private dataService: DataService,
		private readonly _fb: FormBuilder,
		private readonly _authservice: AuthService,
		private readonly _router: Router,
	) {
		this.registerForm = this._fb.group({
			dateEnlevement: [null, [Validators.required]],
			dateRetour: [null, [Validators.required]],
			quantite: [null, [Validators.required, Validators.maxLength(50)]],
			produit: [null, [Validators.required]],
			client: this._fb.group({
				id: [null, [Validators.required]],
				nom: [null, [Validators.required]],
				prenom: [null, [Validators.required]],
				email: [null, [Validators.required]],
				password: [
					null,
					[Validators.required, Validators.minLength(8)],
				],
				tel: [null, [Validators.required]],
			}),
		});
	}
	onSubmit(): void {
		console.log(this.registerForm.value);
		if (!this.registerForm.valid) {
			console.log("pas valide");
		}
		let credential: RegisterForm = this.registerForm.value;
		console.log(credential);

		this._authservice.register(credential).subscribe({
			next: data => {
				console.log("ok");
				console.log(data);
				this.registerForm.reset();
				this.message = "commande créée";
				this._router.navigate(["/"]);
			},
		});
	}
	envoyerDonnees() {
		const donnees = "";
		this.dataService.setData(donnees);
		console.log("données envoyées", donnees);
	}
}
