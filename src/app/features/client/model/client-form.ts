import {AdresseForm} from "../../../core/models/Adresse-form";

export interface ClientForm {
	id: number;
	nom: string;
	email: string;
	password: string;
	tel: number;
	adresse: AdresseForm;
}
