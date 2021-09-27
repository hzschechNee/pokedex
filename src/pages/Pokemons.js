import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Carousel, CarouselItem, Table, Button} from "react-bootstrap";
import { getPokemon } from "../actions/pokemonActions";
import { NewPokemon } from "../components/newPokemon";
import _ from 'lodash';

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon);

    

    useEffect(()=>{
        dispatch(getPokemon(pokemonName))
    }, [dispatch, pokemonName]);

    const showData = () => {
        
        if(!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName];
            return(
                <div className="specific-pokemon container">
                    <Row className="first-row">
                        <Col>
                        <h1 className="pokemon-name">{pokemonName}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="image-side">
                            <div className="item-image">
                                <h3 className="title-image">Images</h3>
                                <Carousel variant="dark" className="carousel-indicator" indicators={false}>
                                    <CarouselItem>
                                        <img className="d-block w-100" src={pokeData.sprites.front_default} alt="front"/>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img className="d-block w-100" src={pokeData.sprites.back_default} alt="back"/>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img className="d-block w-100" src={pokeData.sprites.front_shiny} alt="front"/>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img className="d-block w-100" src={pokeData.sprites.back_shiny} alt="front"/>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </Col>
                        <Col>
                        <Container className="con-stat">
                            <div className="item-stats">
                                <h3>Statistics</h3>
                                <Table striped bordered hover size="sm" className="table-stat">
                                    <tbody>
                                    {pokeData.stats.map(e => {
                                        return(
                                              <tr>
                                                  <td className="head-name">{e.stat.name}</td>
                                                  <td>{e.base_stat}</td>
                                              </tr>       
                                        )
                                    })}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="item-abilities">
                                <h3>Abilities</h3>
                                <Table striped bordered hover size="sm" className="table-stat">
                                    <tbody>
                                        {pokeData.abilities.map(e => {
                                            return(
                                                <tr>
                                                    <td>{e.ability.name}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="item-type">
                                <h3>Types</h3>
                                <Table striped bordered hover size="sm" className="table-type">
                                    <tbody>
                                        {pokeData.types.map(e => {
                                            return(
                                                <tr>
                                                    <td>{e.type.name}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="return-link">
                                <Button variant="danger" href={`/`} >Pokemon List</Button>
                            </div> 
                            <div className="deleteBtn">
                                <Button variant="success">Delete</Button>
                            </div>
                            </Container>
                        </Col>
                    </Row>
                </div>
            )
        };

        if(pokemonState.loading) {
            return(
                <p>Please wait...</p>
            )
        };

        if(pokemonState.error){
            return(
                <p>{pokemonState.error}</p>
            )
        };

       

        return( <p>A problem occured in getting pokemon.</p> )
    };

    return(
        <div className="list-poke">
            <div>
                {showData()}
            </div>
            <div className="editButton">
                {NewPokemon()}
            </div>
        </div>
    )
};

export default Pokemon;