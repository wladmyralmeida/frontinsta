import React, { Component } from 'react'
import api from '../services/api'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {

    state = {
        feed: [],
    }

    async componentDidMount() {
        const response = await api.get('posts')

        this.setState({ feed: response.data })
    }

    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span> Wlad'myr Almeida </span>
                            <span className="place"> Patos</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/allef-vinicius-331173.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>1500 curtidas</strong>

                        <p>Um post muito massa feito na OmniStack!
                            <span>#react #reactnative #node #OmniStack</span>
                        </p>
                    </footer>

                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span> Wlad'myr Almeida </span>
                            <span className="place"> Patos</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/allef-vinicius-331173.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>1500 curtidas</strong>

                        <p>Um post muito massa feito na OmniStack!
                            <span>#react #reactnative #node #OmniStack</span>
                        </p>
                    </footer>

                </article>

            </section>
        )
    }
}

export default Feed;