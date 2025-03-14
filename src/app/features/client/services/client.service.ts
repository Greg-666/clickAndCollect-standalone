import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ClientForm} from "../model/client-form";
import {Observable} from "rxjs";
import {ClientModel} from "../model/client-model";

@Injectable({
	providedIn: "root",
})
export class ClientService {
	post: any;

	constructor(private _http: HttpClient) {}
	createClient(form: ClientForm): Observable<ClientForm> {
		return this._http.post<ClientModel>(
			"http//:localhost:4200/client",
			form,
		);
	}
}
