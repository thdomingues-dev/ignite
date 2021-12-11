// Packages
import React, { useState, useEffect, FC } from 'react'

// Components
import RepositoryItem from './RepositoryItem'

// Styles
import '../styles/repositories.scss'

//https://api.github.com/users/thdomingues-dev/repos

interface Repository {
  name: string
  description: string
  html_url: string
}

const RepositoryList: FC = () => {
  const [repositories, setRepositories] = useState<Array<Repository>>([])

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
