import * as React from 'react'
import styled, { css } from '../../style/styled'
import { Input } from '../../shared/Input/Input'
import { Space } from '../../shared/Space'
import { desktop, mobile } from '../../style/media'
import { Textarea } from '../../shared/Textarea'
import { PrimaryButton, SecondaryButton } from '../../shared/Buttons/Index'
import Check from '../../vectors/Check'

// Local

type Props = { onCancelClicked: any }
type State = {
  title: string
  url: string
  name: string
  email: string
  description: string
  message: string
  loading: boolean
  isDone: boolean
}

export class SubmitForm extends React.Component<Props, State> {
  state = {
    title: '',
    url: '',
    name: '',
    email: '',
    description: '',
    message: '',
    loading: false,
    isDone: false,
  }

  formSubmitted = async (e: any) => {
    e.preventDefault()

    if (
      this.state.description !== '' &&
      this.state.name !== '' &&
      this.state.email !== '' &&
      this.state.title !== '' &&
      this.state.url !== '' &&
      this.state.loading == false
    ) {
      this.setState({ loading: true })

      const res = await linkSubmission({
        description: this.state.description,
        name: this.state.name,
        email: this.state.email,
        title: this.state.title,
        url: this.state.url,
      })

      if (res && res.data.createLinkSubmission.title === this.state.title) {
        this.setState({ isDone: true })
        this.setState({
          description: '',
          name: '',
          email: '',
          title: '',
          url: '',
          loading: false,
        })
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
    }, 5500)
  }

  render = () => {
    const { onCancelClicked } = this.props
    return (
      <Wrapper onClick={onCancelClicked}>
        <BoxWrapper onClick={e => e.stopPropagation()}>
          <FormWrapper onSubmit={this.formSubmitted}>
            {this.state.isDone ? (
              <Scrollable>
                <Title>Submitted for review 🎉</Title>
              </Scrollable>
            ) : (
              <Scrollable>
                <Title>
                  Submit a new link to the <br />
                  GraphQL Weekly newsletter!
                </Title>
                <Space height={48} />

                <Input
                  label="Title"
                  placeholder="The Title of The Link"
                  name="title"
                  onChange={e => this.setState({ title: e.target.value })}
                  value={this.state.title}
                />
                <Line />
                <Input
                  label="URL"
                  placeholder="http://your-link-address.com"
                  name="url"
                  onChange={e => this.setState({ url: e.target.value })}
                  value={this.state.url}
                />
                <Line />
                <Input
                  label="Name"
                  placeholder="Your Name"
                  name="name"
                  onChange={e => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
                <Line />
                <Input
                  label="Email"
                  placeholder="your@email.com"
                  name="email"
                  onChange={e => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
                <Line />
                <Textarea
                  label="Description"
                  placeholder="Write a small overview of what this link is about..."
                  name="description"
                  onChange={e => this.setState({ description: e.target.value })}
                  value={this.state.description}
                />
              </Scrollable>
            )}

            {this.state.message && <Message>{this.state.message}</Message>}
            {this.state.isDone ? (
              <SingleButtonWrapper>
                <SecondaryButton onClick={onCancelClicked}>
                  Cancel
                </SecondaryButton>
              </SingleButtonWrapper>
            ) : (
              <BottomWrapper>
                <PrimaryButton
                  text="Submit Link"
                  icon={<Check />}
                  type="submit"
                  disabled={this.state.loading}
                />

                <SecondaryButton onClick={onCancelClicked}>
                  Cancel
                </SecondaryButton>
              </BottomWrapper>
            )}
          </FormWrapper>
        </BoxWrapper>
      </Wrapper>
    )
  }
}

const linkSubmission = async ({
  description,
  email,
  name,
  title,
  url,
}: {
  description: string
  email: string
  name: string
  title: string
  url: string
}) => {
  const query = `
  mutation CreateLinkSubmission(
    $description: String!
    $email: String!
    $name: String!
    $title: String!
    $url: String!
  ) {
    createLinkSubmission(
      description: $description,
      email: $email,
      name: $name,
      title: $title,
      url: $url
    ) {
      title
    }
  }
  `

  const variables = {
    description,
    email,
    name,
    title,
    url,
  }
  const operationName = 'CreateLinkSubmission'

  return fetch('https://api.graph.cool/simple/v1/cipb111pw5fgt01o0e7hvx2lf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables, operationName }),
  }).then(res => res.json())
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  bottom: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: auto;
  background: radial-gradient(
    450px at 50% 50%,
    rgba(8, 17, 70, 0.5) 0%,
    rgba(8, 17, 70, 0.8) 53.59%,
    rgba(8, 17, 70, 0.9) 100%
  );

  ${mobile(css`
    align-items: flex-start;
    padding: 8px;
  `)};
`

const BoxWrapper = styled.div`
  min-height: 200px;
  box-sizing: border-box;
  padding-bottom: 40px;

  background: #ffffff;
  border-left: 8px solid #dadbe3;
  box-shadow: 0px 4px 16px rgba(8, 17, 70, 0.5);
  border-radius: 8px;

  ${desktop(css`
    width: 100%;
    max-width: 600px;
  `)};

  ${mobile(css`
    width: 100%;
    max-width: 350px;
    /* padding: 40px 24px 24px; */
  `)};

  @media screen and (max-height: 700px) {
    height: 100%;
  }
`

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  line-height: 1.33;
  font-size: 24px;
  text-align: center;

  color: #081146;

  ${mobile(css`
    font-size: 18px;
  `)};
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 13px 0;

  background: #dadbe3;

  ${mobile(css`
    margin: 3px 0;
  `)};
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  height: 100%;
`

const Scrollable = styled.div`
  max-height: 100%;
  overflow: auto;
  flex-basis: auto;
  flex-shrink: 1;

  padding-top: 48px;
  padding-left: 48px;
  padding-right: 48px;

  ${mobile(css`
    padding: 40px 24px 24px;
  `)};
`

const BottomWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  padding-left: 48px;
  padding-right: 48px;

  justify-content: space-between;
  margin-top: 10px;
`

const SingleButtonWrapper = styled(BottomWrapper)`
  justify-content: center;
  margin-top: 40px;
`

const Message = styled.div`
  padding: 9px 10px;
  margin: 15px 0;

  background: #f1f1f4;
  border-radius: 3px;
  color: #424242;
  font-size: 15px;
`
