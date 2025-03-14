export interface AuthTokenModel {
	accesToken: string;

	client: {
		id: number;
		email: string;
	};
}
