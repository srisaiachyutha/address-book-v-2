export class Person {
    userName: string;
    emailId: string;
    mobileNumber: string;
    landlineNumber: string;
    websiteAddress: string;
    houseAddress: string;
    constructor(args) {
        this.userName = args.name;
        this.emailId = args.email;
        this.mobileNumber = args.mobile;
        this.landlineNumber = args.land;
        this.websiteAddress = args.web;
        this.houseAddress = args.house;
    }

}
