export class Mail {
    mailTo: string;
	mailSubject: string;
    mailContent: string;
    attachments: Object[];
    constructor(){
        this.mailTo="reyrojaszaira@gmail.com";
	    this.mailSubject= "Me encnatas";
	    this.mailContent= "Mira lo lindo que nos vemos juntos<3";
        this.attachments=["/Users/USER/Downloads/Nosotros.jpeg"]
    }
}
