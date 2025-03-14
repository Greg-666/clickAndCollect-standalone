import {ClientForm} from "../../client/model/client-form";

export interface CommandeClientForm {
	id: number;
	dateEnlevement: Date;
	dateRetour: Date;
	quantite: number;
	produit: [];
	client: ClientForm;
}
