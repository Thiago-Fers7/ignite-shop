import { styled } from '@stitches/react'

export const PageLineLoader = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  transition: '0.1s',
  height: '$$height',
  backgroundColor: '$green300',
})