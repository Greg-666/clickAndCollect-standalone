import {AdresseForm} from "./Adresse-form";

export interface RegisterForm {
	nom: string;
	prenom: string;
	email: string;
	tel: string;
	password: string;
	adress: AdresseForm;
}
