import React from 'react';


export default class CustomerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.customer ? props.customer.name : '',
            email: props.customer ? props.customer.email : '',
            phone: props.customer ? props.customer.phone : '',
            born: props.customer ? props.customer.born : '',
            occupation: props.customer ? props.customer.occupation : '',
            instagram: props.customer ? props.customer.instagram : '',
           // calendarFocused: false,
            error: ''
        };
    }


    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name || !this.state.email || !this.state.phone) {
            this.setState(() => ({ error: "Você deve informar seu nome, email e celular."})); 
        } else {
            this.setState(() => ({ error: ""})); 
            // Runs parent method
            this.props.onSubmit({
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                born: this.state.born,
                occupation: this.state.occupation,
                instagram: this.state.instagram                 
            });
        };

    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPhoneChange = (e) => {
        const phone = e.target.value;
        this.setState(() => ({ phone }));
    };

    onOccupationChange = (e) => {
        const occupation = e.target.value;
        this.setState(() => ({ occupation }));
    };

    onBornChange = (e) => {
        const born = e.target.value;
        this.setState(() => ({ born }));
    };

    onInstagramChange = (e) => {
        const instagram = e.target.value;
        this.setState(() => ({ instagram }));
    };

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nome completo" 
                        autoFocus 
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Data de nascimento" 
                        value={this.state.born}
                        onChange={this.onBornChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Celular" 
                        value={this.state.phone}
                        onChange={this.onPhoneChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Profissão" 
                        value={this.state.occupation}
                        onChange={this.onOccupationChange}
                    />
                    <input 
                        type="text" 
                        placeholder="instagram" 
                        value={this.state.instagram}
                        onChange={this.onInstagramChange}
                    />
                <button>Salvar Dados</button>
            </form>
            </div>
        );
    }
}
