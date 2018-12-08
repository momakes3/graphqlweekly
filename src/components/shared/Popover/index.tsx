import * as React from 'react'
import { Popper } from 'react-popper'
import { Placement, Modifiers } from 'popper.js'

// Local
import { PopoverWrapper, CaretWrapper, Rectangle } from './style'
import { HorizentalCaret, VerticalCaret } from '../../vectors/Caret'
import { InputColor } from '../../style/theme'

type Props = {
  position: 'bottom' | 'top' | 'right' | 'left' | string
  arrowProps?: { [x: string]: any }
  children?: React.ReactNode
  setByPopper?: boolean
  style?: any
  bgColor?: InputColor
  arrowColor?: InputColor
  arrowLeftOrTop?: string
  maxHeight?: number
  maxWidth?: number
  rectangleRef?: React.RefObject<HTMLDivElement>
  hasShadow?: boolean
}

const reversePosMap = {
  bottom: 'top',
  top: 'bottom',
  right: 'left',
  left: 'right',
}

export const Popover = React.forwardRef((props: Props, ref: any) => {
  const {
    position: popoverPostion,
    arrowProps,
    setByPopper,
    bgColor,
    arrowColor,
    arrowLeftOrTop,
    maxHeight,
    maxWidth,
    rectangleRef,
    children,
    hasShadow,
    ...wrapperProps
  } = props
  // For arrow
  const angle =
    popoverPostion === 'top' || popoverPostion === 'bottom'
      ? 'horizental'
      : 'vertical'
  // @ts-ignore
  const caretPosition: string = reversePosMap[popoverPostion]
  const isCaretFirst = caretPosition === 'top' || caretPosition === 'left'
  const isCaretFliped = caretPosition === 'bottom' || caretPosition === 'left'

  const { ref: arrowInnerRef = null, ...restOfArrowProps } = arrowProps || {}

  return (
    <PopoverWrapper angle={angle} ref={ref} {...wrapperProps}>
      <CaretWrapper
        angle={angle}
        isCaretFirst={isCaretFirst}
        isCaretFliped={isCaretFliped}
        setByPopper={setByPopper}
        arrowColor={arrowColor}
        arrowLeftOrTop={arrowLeftOrTop}
        ref={arrowInnerRef}
        {...restOfArrowProps}
      >
        {angle === 'horizental' ? <HorizentalCaret /> : <VerticalCaret />}
      </CaretWrapper>

      <Rectangle
        // @ts-ignore
        ref={rectangleRef}
        hasShadow={hasShadow}
        caretPosition={caretPosition}
        bgColor={bgColor}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
      >
        {children}
      </Rectangle>
    </PopoverWrapper>
  )
})

export { Manager, Reference } from 'react-popper'

export const PopperPopover = (props: {
  position: Placement
  modifiers?: Modifiers
  children?: any
}) => {
  return (
    <Popper placement={props.position}>
      {({ ref, style, placement, arrowProps }) => (
        <Popover
          setByPopper={true}
          position={String(placement)}
          ref={ref}
          style={style}
          data-placement={placement}
          arrowProps={arrowProps}
          // eslint-disable-next-line
          children={props.children}
        />
      )}
    </Popper>
  )
}

export default PopperPopover
