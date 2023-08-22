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
import { getAll, post } from '../services/CitationService'
import getPeoples from '../services/PeopleService'
import IPeople from '../models/IPeople'

export default function HomePage() {
  const limit = 1500
  const [used, setUsed] = useState<number>(0)
  const [citations, setCitations] = useState<ICitation[]>()
  const [peoples, setPeoples] = useState<IPeople[]>()

  useEffect(() => {
    getAll(setCitations)
    getPeoples(setPeoples)
  }, [])

  const counter = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value
    setUsed(text.length)
  }

  const send = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = event.currentTarget.citation.value
    const name = event.currentTarget.people.value

    const sending = post(text, name)
    sending
      .then(() => {
        setUsed(0)
        getAll(setCitations)
      })
      .catch(() => {})

    event.currentTarget.reset()
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
            name="people"
            id="people"
            list="peoples"
          />
          <datalist id="peoples">
            {peoples &&
              peoples.map((p) => (
                <option key={p.id} value={`${p.firstname} ${p.lastname}`} />
              ))}
          </datalist>
          <Button>Enviar citação</Button>
        </AreaButton>
      </Header>
      <List>
        {citations &&
          citations.map((item) => {
            return (
              <Item key={item.id}>
                <Text>{item.text}</Text>
                <Signature>{item.signature}</Signature>
              </Item>
            )
          })}
      </List>
    </Content>
  )
}
