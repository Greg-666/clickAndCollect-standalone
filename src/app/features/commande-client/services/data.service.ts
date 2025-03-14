import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
	providedIn: "root",
})
export class DataService {
	private dataSubject = new BehaviorSubject<string>("");

	data$ = this.dataSubject.asObservable();

	setData(newData: string) {
		this.dataSubject.next(newData);
	}
}
