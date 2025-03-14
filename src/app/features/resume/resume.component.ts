import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth/services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../commande-client/services/data.service";

@Component({
	selector: "app-resume",
	imports: [],
	templateUrl: "./resume.component.html",
	styleUrl: "./resume.component.scss",
})
export class ResumeComponent {
	data: string = "";

	constructor(
		private dataService: DataService,
		private readonly _fb: FormBuilder,
		private readonly _authservice: AuthService,
		private readonly _router: Router,
	) {}
	ngOnInit() {
		this.dataService.data$.subscribe(receivedData => {
			this.data = receivedData;
		});
	}
}
