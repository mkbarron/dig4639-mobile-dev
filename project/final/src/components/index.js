import React from 'react';
import "./index.css";

class Final extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        profile: {},
        contacts: []
        };
    }

    getContacts() {
        window.fetch("http://plato.mrl.ai:8080/contacts", { headers: { API: "barron" } })
        .then(res => res.json())
        .then(data => {
          this.setState({ 
              contacts: data.contacts });
          console.log(data)
        });
      }

    getProfile() {
        window.fetch("http://plato.mrl.ai:8080/profile", { headers: { API: "barron" } })
        .then(res => res.json())
        .then(data => {
        this.setState({ 
            profile: data });
        console.log(data)
        });
    }

    componentDidMount() {
        this.getProfile();
        this.getContacts();
    }

    remove = (index) => {
        fetch('http://plato.mrl.ai:8080/contacts/remove', {
        method: 'POST',
        body: JSON.stringify({ position: index }),
        headers: { "Content-type": "application/json", API: "barron" }
        })
        .then(res => {  return res.json() }) 
        .then(() => {
        this.getProfile();
        this.getContacts();
        });
    }

    add = (event) => {
        event.preventDefault();
            fetch('http://plato.mrl.ai:8080/contacts/add', {
                method: 'POST',
                body: JSON.stringify({ 
                    name: this.refs.name.value,
                    number: this.refs.number.value 
                }),
                headers: { "Content-type": "application/json", API: "barron" }
        })
        .then(res => { return res.json() })
        .then(() => {
        this.getProfile();
        this.getContacts();
                });
    }

    render() {
        return (
        <div>
            <br />
            <h1>{this.state.profile.name}'s Address Book</h1>
            <div className="container">
                <div>
                    <fieldsettwo className="contacts">
                        {this.state.contacts.map((value, index) => {
                            return (
                                <fieldset className="card">
                                    <h4>{value.name}</h4>
                                    <p>{value.number} </p>
                                    <div className="buttondiv">
                                    <button type="submit" 
                                        onClick={() => this.remove(index)}  
                                        id={index}>Delete
                                    </button>
                                    </div>
                                </fieldset>);
                        })
                        }
                    </fieldsettwo>
                    <br /><br />
                    <div>
                        <fieldsettwo>
                        <h5>{this.state.profile.count} Contacts - Add More?</h5>
                        </fieldsettwo>
                    </div>
                    <div>
                    <div>
                        <fieldset>
                            <form onSubmit={this.add}>
                                <input ref="name" type='text' placeholder='Name' />
                                <input ref="number" type='text' placeholder='Number'/>
                                <br />
                                <button type="submit">Create</button>
                            </form>
                        </fieldset>
                    </div>
                    <br />
                </div>
                </div>
            </div>
            <br />
            <br />
        </div>
        );
    }
}

export default Final;