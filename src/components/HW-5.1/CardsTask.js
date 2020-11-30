import React from 'react'
import './CardsTask.css'
import Card from './Card'
import cards from './cards'

export default function CardsTask() {
  return (
    <div className="cards_task">
      { cards.map((card) => {
        return (
          <Card key={ card.id } { ...card }>
            <img src={ card.img } className="card-img-top" alt="card-img" />
          </Card>
        )
      })}
    </div>
  )
}
