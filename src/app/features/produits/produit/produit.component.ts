import {Component} from "@angular/core";
import {
	FormArray,
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import {ProduitService} from "./service/produit.service";
import {ProduitForm} from "./model/ProduitForm";
import {Router} from "@angular/router";

@Component({
	selector: "app-produit",
	imports: [ReactiveFormsModule],
	templateUrl: "./produit.component.html",
	styleUrl: "./produit.component.scss",
})
export class ProduitComponent {
	createProduitForm!: FormGroup;

	constructor(
		private readonly _fb: FormBuilder,
		private readonly _produitService: ProduitService,
		private readonly _router: Router,
	) {
		this.createProduitForm = this._fb.group({
			produits: this._fb.array([]),
		});
	}
	get produits() {
		return this.createProduitForm.get("produits") as FormArray;
	}
	addProduits() {
		const produits = this._fb.control(null, [Validators.required]);
		this.produits.push(produits);
	}
	removeProduits(index: number) {
		this.produits.removeAt(index);
	}

	onSubmit() {
		console.log(this.createProduitForm.value);
		if (!this.createProduitForm.valid) {
			console.log("non valide");
		}
		let credential: ProduitForm = this.createProduitForm.value;
		this._produitService
			.createProduit(this.createProduitForm.value)
			.subscribe({
				next: data => {
					console.log("succes");
					console.log(data);
					this.createProduitForm.reset();
					this._router.navigate(["/"]);
				},
			});
	}
}
