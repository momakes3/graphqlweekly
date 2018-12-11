import * as React from 'react'
import styled, { css } from '../../style/styled'
import { Input } from '../../shared/Input/Input'
import { Space } from '../../shared/Space'
import { desktop, mobile } from '../../style/media'
import { Textarea } from '../../shared/Textarea'
import { PrimaryButton, SecondaryButton } from '../../shared/Buttons/Index'
import Check from '../../vectors/Check'

// Local
interface Props {
  onCancelClicked: React.MouseEvent<HTMLElement>
}

export const SubmitForm = ({ onCancelClicked }: Props) => {
  return (
    <Wrapper>
      <BoxWrapper>
        <FormWrapper>
          <Scrollable>
            <Title>
              Submit a new link to the <br />
              GraphQL Weekly newsletter!
            </Title>
            <Space height={48} />

            <Input label="Title" placeholder="The Title of The Link" />
            <Line />
            <Input label="URL" placeholder="http://your-link-address.com" />
            <Line />
            <Input label="Name" placeholder="Your Name" />
            <Line />
            <Input label="Email" placeholder="your@email.com" />
            <Line />
            <Textarea
              label="Description"
              placeholder="Write a small overview of what this link is about..."
            />
          </Scrollable>
          <BottomWrapper>
            <PrimaryButton text="Submit Link" icon={<Check />} />
            <SecondaryButton onClick={onCancelClicked}>Cancel</SecondaryButton>
          </BottomWrapper>
        </FormWrapper>
      </BoxWrapper>
    </Wrapper>
  )
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
  padding: 48px;
  box-sizing: border-box;

  background: #ffffff;
  border-left: 8px solid #dadbe3;
  box-shadow: 0px 4px 16px rgba(8, 17, 70, 0.5);
  border-radius: 8px;

  ${desktop(css`
    width: 600px;
  `)};

  ${mobile(css`
    width: 100%;
    height: 100%;
    max-width: 350px;
    padding: 40px 24px 24px;
  `)};
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
  margin: 24px 0;

  background: #dadbe3;

  ${mobile(css`
    margin: 16px 0;
  `)};
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  height: 100%;
`

const Scrollable = styled.div`
  max-height: 100%;
  overflow: auto;
  flex-basis: auto;
  flex-shrink: 1;
`

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin-top: 10px;
`
