import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem 0',
  flexDirection: 'column',
  gap: '1rem',
});

const boxWrap = style({
  padding: '12px 0',
  backgroundColor: '#F2F3F5',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
const box = style({
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const btmContent = style({
  padding: 0,
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  boxWrap,
  btmContent,
};
