import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFilteres = useMemo ( () => getHeroesByName(q), [q]) 

  const handleSearch = ( e ) =>{
      e.preventDefault();
      console.log(searchText)
      navigate(`?q=${ searchText }`)
  }

  return (
    <>
        <h1>Search</h1>
        <hr />
        <div className='row'>
          <div className='col-5'>
            <h4>Search Form</h4>
            <hr />
            <form onSubmit={ handleSearch }>
              <input 
                type="text"
                placeholder="Buscar un Heroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText } 
                onChange={ handleInputChange }             
              />
              <button className='btn btn-outline-primary mt-1 btn-block' type='submit'>
                Buscar
              </button>
            </form>
            
          </div>
          <div className='col-7'>
              <h4>Resultados</h4>
              <hr />
              {
                ( q === '')
                    ? <div className='alert alert-info'>Busca un heroe</div>
                    : (heroesFilteres.length === 0 ) 
                      && <div className='alert alert-danger'> No hay resultados con la palabra { q }</div>
              }


              {
                heroesFilteres.map(hero=>(
                  <HeroCard 
                      key = {hero.id}
                      { ...hero }
                  />
                ))
              }
            </div>
        </div>
    </>
  )
}
