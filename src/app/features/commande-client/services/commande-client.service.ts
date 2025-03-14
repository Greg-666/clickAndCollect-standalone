import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommandeClient} from "../models/commande-client";

@Injectable({
	providedIn: "root",
})
export class CommandeClientService {
	constructor(private readonly _http: HttpClient) {}
	allCommandeClient(): Observable<CommandeClient> {
		return this._http.get<CommandeClient>(
			"http//:localhost:4200/commande-client?page=0",
		);
	}
}
