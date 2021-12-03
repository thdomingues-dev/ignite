// Packages
import React from 'react'

const RepositoryItem = ({ name, description, link }) => (
  <li>
    <strong>{name}</strong>
    <p>{description}</p>

    <a href={link}>
      Acessar repositório
    </a>
  </li>
)

export default RepositoryItem
