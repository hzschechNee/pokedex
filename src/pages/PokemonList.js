import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _, { stubFalse } from 'lodash';
import { getPokemonList } from '../actions/pokemonActions'
import { Row, Col, Container, Button, Card, Image, Modal, Form} from "react-bootstrap";
import {NewPokemon} from "../components/newPokemon";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom"

const PokemonList = (props) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const pokemonListState = useSelector(state => state.PokemonList);

    useEffect(()=> {
        fetchData()
    }, []);

    const fetchData = (url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20") => {
        dispatch(getPokemonList(url))
    };

    const fetchMoreData = () => {
        console.log(pokemonListState.nextUrl)
        fetchData(pokemonListState.nextUrl);
    }

    const showData = () => {

        if(!_.isEmpty(pokemonListState.data)){

            const avatarUrl = (url) => {
                const id = url.split("/")[6];
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }

            return(
                <div id="scrollableDiv" style={{ height: 700, overflow: "auto" }} className="scrollableDiv">
                    <InfiniteScroll
                        dataLength={pokemonListState.data.length}
                        next={fetchMoreData}
                        hasMore={pokemonListState.nextUrl ? true : false}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                        scrollableTarget="scrollableDiv"
                    >   
                        <Row lg={5} md={3} xs={1}>
                        {pokemonListState.data.map((e, index) => {
                            return(
                                <Link to={`/pokemon/${e.name}`} className="link-pokemon" key={index}>
                                    <Col >
                                        <div className="center-list">
                                        <Card style={{ width: '12rem' }}>
                                            <Card.Img variant="top" src={avatarUrl(e.url)}/>
                                            <Card.Body>
                                                <Card.Title className="list-name">{e.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        </div>
                                    </Col>
                                </Link>
                                
                            )
                        })}
                        </Row>
                    
                    </InfiniteScroll>
                </div>  
            )
        };

        if(pokemonListState.error !== ""){
            return(
                <p>{pokemonListState.error}</p>
            )
        };

        return(
            <p>A problem occured in getting the list.</p>
        )
    };

    return(
        <div className="list-body">
            <div>
                <div className="brand-name">Pokedex</div>
                <form className="search-list">
                    <input type="text" onChange={e => setSearch(e.target.value.toLowerCase())} placeholder="Enter Pokemon Name"/>
                    <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
                </form>
            </div>
            <div>
                {showData()}
            </div>
            {NewPokemon()}
        </div>
    )
};

export default PokemonList;