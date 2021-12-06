// Packages
import React from 'react'

// Components
import RepositoryItem from './RepositoryItem'

// Styles
import '../styles/repositories.scss'

const RepositoryList = () => (
  <section className="repository-list">
    <h1>Lista de Repositórios</h1>

    <ul>
      <RepositoryItem
        name="My Github"
        description="Some thing here"
        link="https://github.com/thdomingues-dev"
        />
    </ul>
  </section>
)

export default RepositoryList
