import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProduitModel} from "../model/produit-model";
import {ProduitForm} from "../model/ProduitForm";
import {Injectable} from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ProduitService {
	post: any;

	constructor(private _http: HttpClient) {}
	createProduit(form: ProduitForm): Observable<ProduitForm> {
		return this._http.post<ProduitModel>(
			"http//:localhost4200/produits",
			form,
		);
	}
}
