// Packages
import React, { FC } from 'react'

interface RepositoryItemProps {
  name: string
  description: string
  link: string
}

const RepositoryItem: FC<RepositoryItemProps> = ({ name, description, link }) => (
  <li>
    <strong>{name}</strong>
    <p>{description}</p>

    <a href={link}>
      Acessar repositório
    </a>
  </li>
)

export default RepositoryItem
