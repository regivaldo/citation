import React, { useState } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Title from '../components/Title'
import FieldArea from '../components/FieldArea'
import Field from '../components/Field'
import AreaButton from '../components/AreaButton'
import People from '../components/People'
import Signature from '../components/Signature'
import Button from '../components/Button'
import List from '../components/List'
import Item from '../components/Item'
import Text from '../components/Text'

export default function HomePage() {
  const limit = 1500
  const [used, setUsed] = useState<number>(0)

  const counter = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value
    setUsed(text.length)
  }

  return (
    <Content>
      <Header>
        <Title>Informe sua citação</Title>
        <FieldArea>
          <Field
            name="citation"
            id="citation"
            cols={30}
            rows={2}
            maxLength={limit}
            onChange={(event) => counter(event)}
          />
          <div>
            {used}/{limit}
          </div>
        </FieldArea>

        <AreaButton>
          <People type="text" name="name" id="name" list="peoples" />
          <datalist id="peoples">
            <option value="Regivaldo Silva" />
          </datalist>
          <Button>Enviar citação</Button>
        </AreaButton>
      </Header>
      <List>
        <Item>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, id? Temporibus voluptatibus magni accusamus earum ea
            delectus, velit doloremque enim, molestiae, odit expedita fugit
            minima animi facere cum quaerat veritatis. Fugit eum iure
            consectetur odio deleniti nulla eius minus eligendi provident? Eaque
            adipisci in repellendus ab, modi delectus quisquam tempora, placeat
            laboriosam aut, ullam sunt veniam. Facere sint veniam perferendis
            saepe tenetur nihil beatae molestias voluptatum amet! Quam
            blanditiis voluptates libero quidem velit eligendi voluptas magnam.
            Impedit illum excepturi tempora vel iste perferendis aut architecto.
            A cum repellendus quas quibusdam veritatis odit est saepe ratione
            suscipit fugit laudantium, deserunt voluptas?
          </Text>
          <Signature>Silva, Regivaldo</Signature>
        </Item>
        <Item>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, id? Temporibus voluptatibus magni accusamus earum ea
            delectus, velit doloremque enim, molestiae, odit expedita fugit
            minima animi facere cum quaerat veritatis. Fugit eum iure
            consectetur odio deleniti nulla eius minus eligendi provident? Eaque
            adipisci in repellendus ab, modi delectus quisquam tempora, placeat
            laboriosam aut, ullam sunt veniam. Facere sint veniam perferendis
            saepe tenetur nihil beatae molestias voluptatum amet! Quam
            blanditiis voluptates libero quidem velit eligendi voluptas magnam.
            Impedit illum excepturi tempora vel iste perferendis aut architecto.
            A cum repellendus quas quibusdam veritatis odit est saepe ratione
            suscipit fugit laudantium, deserunt voluptas?
          </Text>
          <Signature>Silva, Regivaldo</Signature>
        </Item>
        <Item>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, id? Temporibus voluptatibus magni accusamus earum ea
            delectus, velit doloremque enim, molestiae, odit expedita fugit
            minima animi facere cum quaerat veritatis. Fugit eum iure
            consectetur odio deleniti nulla eius minus eligendi provident? Eaque
            adipisci in repellendus ab, modi delectus quisquam tempora, placeat
            laboriosam aut, ullam sunt veniam. Facere sint veniam perferendis
            saepe tenetur nihil beatae molestias voluptatum amet! Quam
            blanditiis voluptates libero quidem velit eligendi voluptas magnam.
            Impedit illum excepturi tempora vel iste perferendis aut architecto.
            A cum repellendus quas quibusdam veritatis odit est saepe ratione
            suscipit fugit laudantium, deserunt voluptas?
          </Text>
          <Signature>Silva, Regivaldo</Signature>
        </Item>
      </List>
    </Content>
  )
}
