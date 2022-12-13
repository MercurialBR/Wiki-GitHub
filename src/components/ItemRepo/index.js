import React from 'react'

import { ItemContainer, ButtonRemove, ButtonRepo} from './styles';

function ItemRepo({repo, handleRemoveRepo }) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
     <h3> {repo.name} </h3> 
     <p> {repo.full_name} </p>
     <ButtonRepo> <a href={repo.html_url} rel="noreferrer" target='_blank'> Ver repositório </a><br /> </ButtonRepo>
     <ButtonRemove> <a href='#' rel="noreferrer" className='remover'> Remover </a> </ButtonRemove>
     <hr />
    </ItemContainer>
  )
}

export default ItemRepo;