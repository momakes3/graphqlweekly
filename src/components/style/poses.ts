export const popoverPoseGroupProps = {
  enterPose: 'open',
  exitPose: 'closed',
  preEnterPose: 'closed'
}
export const popoverPoseConfig = {
  open: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 120
    }
  },
  closed: {
    scale: 0.95,
    opacity: 0,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 140
    }
  }
}
