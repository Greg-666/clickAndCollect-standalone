import {Injectable} from "@angular/core";
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
	providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
	constructor() {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		let client = localStorage.getItem("currentClient");
		if (client) {
			let token = JSON.parse(client).token;
			if (token && token !== "") {
				let clone = req.clone({
					setHeaders: {
						Authorization: "Bearer" + token,
					},
				});
				return next.handle(clone);
			}
		}
		return next.handle(req);
	}
}
