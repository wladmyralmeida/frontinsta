import React, { Component } from 'react'
import api from '../services/api'

import './New.css'

class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    }

    //Não está no mesmo formato que o react tem, pois pra acessar o valor this deve-ser 
    //em arrow function. Colchete para usar variável pro nome da informação que vai alterar no estado;
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    //Vem no formato de array
    handleImageChange = e => {
        this.setState({ image: e.target.files[0] })
    }

    //Previnir que o html direcione à outra página ou atualize-a,
    //Como é multipart e não json, precisa fazer o append das informações;
    handleSubmit = async e => {
        e.preventDefault()

        const data = new FormData()

        data.append('image', this.state.image)
        data.append('author', this.state.author)
        data.append('description', this.state.description)
        data.append('place', this.state.place)
        data.append('hashtags', this.state.hashtags)

        await api.post('posts', data)
        
        //Acessar o histórico de navegação do usuário que vem lá dos routes
        this.props.history.push('/')
    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange} />

                <input
                    type="text"
                    name="author"
                    placeholder="Autor"
                    onChange = { this.handleChange }
                    value = { this.state.author }
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Local"
                    onChange = { this.handleChange }
                    value = { this.state.place }
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Descrição"
                    onChange = { this.handleChange }
                    value = { this.state.description }
                />

                <input
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags"
                    onChange = { this.handleChange }
                    value = { this.state.hashtags }
                />

                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default New;