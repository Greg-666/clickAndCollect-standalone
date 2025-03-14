import {CanActivate, CanActivateFn, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const isconnectedGuard: CanActivateFn = (route, state) => {
	const authService: AuthService = inject(AuthService);
	const router: Router = inject(Router);

	if (authService.CurrentClient()) {
		return true;
	}
	return router.navigate(["/auth/login"]);
};
