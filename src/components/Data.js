import React from 'react';
import { Component } from 'react';
import App from '../App';
import UserCard from './UserCard';

export default class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (this.state.items.map(el => (
                <UserCard key={el.id} item={el}/>
            )))
        }
    }
}