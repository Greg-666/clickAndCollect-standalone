import {HttpInterceptor, HttpInterceptorFn} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
	const authService: AuthService = inject(AuthService);

	const client = authService.CurrentClient();

	if (client) {
		const token = client.token;

		const requestClone = req.clone({
			headers: req.headers.append("authorization", " bearer" + token),
		});
		return next(requestClone);
	}

	return next(req);
};
