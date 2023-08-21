import React, { useEffect, useState } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Title from '../components/Title'
import FieldArea from '../components/FieldArea'
import Field from '../components/Field'
import AreaButton from '../components/AreaButton'
import Signature from '../components/Signature'
import Button from '../components/Button'
import List from '../components/List'
import Item from '../components/Item'
import Text from '../components/Text'
import People from '../components/People'
import ICitation from '../models/ICitation'
import getAll from '../services/CitationService'

export default function HomePage() {
  const limit = 1500
  const [used, setUsed] = useState<number>(0)
  const [citation, setCitation] = useState<ICitation[]>()

  useEffect(() => {
    getAll(setCitation)
  }, [])

  const counter = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value
    setUsed(text.length)
  }

  const send = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const citation = event.target?.citation.value
    const name = event.target?.name.value
    console.log(citation, name)
  }

  return (
    <Content>
      <Header onSubmit={(event) => send(event)} method="post">
        <Title>Informe sua citação</Title>
        <FieldArea>
          <Field
            name="citation"
            id="citation"
            cols={30}
            rows={2}
            placeholder="Citação"
            maxLength={limit}
            onChange={(event) => counter(event)}
          />
          <div>
            {used}/{limit}
          </div>
        </FieldArea>
        <AreaButton>
          <People
            placeholder="Quem disse isso?"
            type="text"
            name="name"
            id="name"
            list="peoples"
          />
          <datalist id="peoples">
            <option value="Regivaldo Silva" />
          </datalist>
          <Button>Enviar citação</Button>
        </AreaButton>
      </Header>
      <List>
        {citation &&
          citation.map((item) => {
            return (
              <Item>
                <Text>{item.text}</Text>
                <Signature>{item.signature}</Signature>
              </Item>
            )
          })}
      </List>
    </Content>
  )
}
