import {HttpInterceptor, HttpInterceptorFn} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

import {AuthTokenModel} from "../models/auth-token.model";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
	const authService: AuthService = inject(AuthService);

	const client = authService.CurrentClient();

	if (client) {
		const token: string = client.token;

		const requestClone = req.clone({
			headers: req.headers.append("Authorization", " bearer" + token),
		});
		return next(requestClone);
	}
	return next(req);
};
