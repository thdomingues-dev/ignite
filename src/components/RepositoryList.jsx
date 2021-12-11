// Packages
import React, { useState, useEffect } from 'react'

// Components
import RepositoryItem from './RepositoryItem'

// Styles
import '../styles/repositories.scss'

//https://api.github.com/users/thdomingues-dev/repos

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([])


  useEffect(() => {
    fetch('https://api.github.com/users/thdomingues-dev/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => 
          <RepositoryItem
            key={repository?.name}
            name={repository?.name}
            description={repository?.description ? repository?.description : 'No description'}
            link={repository?.html_url}
          />
        )}
      </ul>
    </section>
)}

export default RepositoryList
