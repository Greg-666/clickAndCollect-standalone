import {Component} from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import {ClientService} from "./services/client.service";

@Component({
	selector: "app-client",
	imports: [ReactiveFormsModule],
	templateUrl: "./client.component.html",
	styleUrl: "./client.component.scss",
})
export class ClientComponent {
	createClientForm!: FormGroup;

	constructor(
		private readonly _fb: FormBuilder,

		private readonly _clientService: ClientService,
	) {
		this.createClientForm = this._fb.group({
			nom: [null, [Validators.required]],
			email: [null, [Validators.required]],
			password: [null, [Validators.required, Validators.minLength(8)]],
			tel: [null, [Validators.required]],
			adresse: this._fb.group({
				id: [null, [Validators.required]],
				rue: [null, [Validators.required]],
				numero: [null, [Validators.required]],
				codePostal: [null, [Validators.required]],
				ville: [null, [Validators.required]],
			}),
		});
	}
	onSubmit() {
		this.createClientForm.markAllAsTouched();
		if (!this.createClientForm.valid) {
			return;
		}
		this._clientService
			.createClient(this.createClientForm.value)
			.subscribe({
				next: data => {
					console.log("succes");
					console.log(data);
				},
			});
	}
}
