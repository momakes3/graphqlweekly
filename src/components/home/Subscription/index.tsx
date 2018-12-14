import * as React from 'react'
import styled, { css } from '../../style/styled'
import { Input } from '../../shared/Input/Input'
import { PrimaryButton } from '../../shared/Buttons/Index'
import Subscribe from '../../vectors/Subscribe'
import { mobile } from '../../style/media'
import { Space } from '../../shared/Space'

type Props = {}
type State = { name: string; email: string; message: string; loading: boolean }

export class Subscription extends React.Component<Props, State> {
  state = {
    name: '',
    email: '',
    message: '',
    loading: false,
  }

  subscribeSubmited = async e => {
    e.preventDefault()
    if (
      this.state.name !== '' &&
      this.state.email !== '' &&
      this.state.loading == false
    ) {
      this.setState({ loading: true })

      const res = await subscribeUser({
        name: this.state.name,
        email: this.state.email,
      })
      //{"data":{"createSubscriber":{"email":"b.rajabifard@gmail.com","name":"behnam"}}}
      if (res && res.data.createSubscriber.email === this.state.email) {
        this.showMessage('You are successfully added 🎉')
        this.setState({ name: '', email: '', loading: false })
      } else {
        this.setState({ loading: false })
        this.showMessage('Error!')
      }
    } else {
      this.showMessage('Empty values!')
    }

    return false
  }

  showMessage = (message: string) => {
    this.setState({ message })

    setTimeout(() => {
      this.setState({ message: '' })
    }, 5000)
  }

  render() {
    return (
      <BoxWrapper onSubmit={this.subscribeSubmited}>
        <Input
          label="NAME"
          placeholder="Bob Loblaw"
          onChange={e => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <Line />
        <Input
          label="EMAIL"
          placeholder="bob@example.com"
          onChange={e => this.setState({ email: e.target.value })}
          value={this.state.email}
        />
        <Space height={0} heightOnMobile={20} />
        <PrimaryButton
          type="submit"
          text="Subscribe"
          icon={<Subscribe />}
          disabled={this.state.loading}
        />

        {this.state.message && <Message>{this.state.message}</Message>}
      </BoxWrapper>
    )
  }
}

const subscribeUser = async ({
  name,
  email,
}: {
  name: string
  email: string
}) => {
  const query = `
    mutation CreateSubscriber($name: String!,$email: String! ){
      createSubscriber(name: $name,email: $email) {
        email
        name
      }
    }
  `
  const variables = { name, email }
  const operationName = 'CreateSubscriber'

  return fetch('https://api.graph.cool/simple/v1/cipb111pw5fgt01o0e7hvx2lf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables, operationName }),
  }).then(res => res.json())
}

const BoxWrapper = styled.form`
  position: relative;
  max-width: 783px;
  min-height: 88px;
  margin: auto;
  padding: 24px;
  padding-left: 32px;
  display: flex;
  align-items: stretch;

  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(8, 17, 70, 0.1);
  border-radius: ${p => p.theme.radiusLarge}px;

  ${mobile(css`
    flex-direction: column;
    align-items: unset;
    padding-left: 24px;
  `)};
`

const Line = styled.div`
  width: 1px;
  height: 40px;
  margin: 0 24px;
  background: #dadbe3;

  ${mobile(css`
    width: auto;
    height: 1px;
    margin: 4px 0;
  `)};
`

const Message = styled.div`
  position: absolute;
  padding: 5px 10px;
  right: 25px;
  bottom: -15px;

  background: #f1f1f4;
  border-radius: 3px;
  color: #424242;
  font-size: 14px;
`
