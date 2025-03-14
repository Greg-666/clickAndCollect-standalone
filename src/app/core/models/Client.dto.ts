export interface ClientDto {
	id: string;
	clientName: string;
	email: string;
}

export interface TokenDto {
	token: string;
	client: ClientDto;
}
