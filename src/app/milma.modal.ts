export class IUser {
    constructor(
        public socityName: string,
        public place: string,
        public district: string,
        public email: string,
        public phoneNumber: number,
        public userName: string,
        public passWord: string,
        public isAdmin: number
    ){}
}