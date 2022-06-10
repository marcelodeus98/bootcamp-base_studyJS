class bankAccount {
    constructor(agency, number, type) {
        this.agency = agency;
        this.number = number;
        this.type = type;
        this._balance = 0;
    }

    get balance(){
        return this._balance;
    }

    set balance(value){
        this._balance = value;
    }

    to_withdraw(value){
        if(value > this._balance){
            return 'Invalid operation';
        }
        this._balance = this._balance - value;

        return this._balance;
    }

    deposit(value){
        this._balance = this._balance + value;

        return this._balance;
    }
}

class currentAccount extends bankAccount{
    constructor(agency, number,creditCard){
        super(agency, number);
        this.type = 'currentAccount';
        this._creditCard = creditCard;
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(value) {
        this._creditCard = value;
    }
}

class savingsAccount extends bankAccount{
    constructor(agency, number){
        super(agency, number);
        this.type = 'savingsAccount';
    }
}

class universityAccount extends bankAccount{
    constructor(agency, number){
        super(agency, number);
        this.type = 'universityAccount';
    }

    to_withdraw(value){
        if( value > 500){
            return 'Invalid operation!'
        }
        this._balance = this._balance - value;

        return this._balance;
    }
}