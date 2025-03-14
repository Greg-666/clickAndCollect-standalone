import {AdresseForm} from "../../../core/models/Adresse-form";

export interface ClientModel {
	id: number;
	nom: string;
	email: string;
	password: string;
	tel: number;
	adresse: AdresseForm;
}
