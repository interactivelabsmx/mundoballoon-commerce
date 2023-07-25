export const getTransitionFadeInProps = (
  duration = 300,
  enterEfect = 'ease-out',
  leaveEfect = 'ease-in',
) => ({
  enter: `transition ${enterEfect} duration-${duration}`,
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: `transition ${leaveEfect} duration-${duration - 100}`,
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
});

export const getTransitionFadeInLinearProps = (duration = 300) =>
  getTransitionFadeInProps(duration, 'ease-linear', 'ease-linear');

export const getTransitionGrowInProps = (duration = 300) => ({
  enter: `transition ease-out duration-${duration}`,
  enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
  enterTo: 'opacity-100 translate-y-0 sm:scale-100',
  leave: `transition ease-in duration-${duration - 100}`,
  leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
  leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
});

export const getTransitionSlideInProps = (duration = 300, left = false) => ({
  enter: `transition ease-in-out duration-${duration}`,
  enterFrom: `${left ? '-' : ''}translate-x-full`,
  enterTo: 'translate-x-0',
  leave: `transition ease-in-out duration-${duration - 200}`,
  leaveFrom: 'translate-x-0',
  leaveTo: `${left ? '-' : ''}translate-x-full`,
});

export const getTransitionRightSlideInProps = (duration = 300) =>
  getTransitionSlideInProps(duration);

export const getTransitionLeftSlideInProps = (duration = 300) =>
  getTransitionSlideInProps(duration, true);

export const getTransitionSmallDropdownProps = (duration = 150) => ({
  enter: `transition ease-out duration-${duration}`,
  enterFrom: 'transform opacity-0 scale-95',
  enterTo: 'transform opacity-100 scale-100',
  leave: `transition ease-in duration-${duration - 50}`,
  leaveFrom: 'transform opacity-100 scale-100',
  leaveTo: 'transform opacity-0 scale-95',
});
