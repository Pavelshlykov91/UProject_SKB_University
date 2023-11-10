import React from 'react';
import { Hover, HoverStyle, Reaction } from './helpers';
// import { useAppDispatch } from '../redux/store';
// import { addReaction } from './reducer/InterviewPageSlice';

export interface ReactionBarSelectorEmojiProps {
  reaction: Reaction;
  onSelect: (id: number) => void;
}

export const ReactionBarSelectorEmoji = React.forwardRef<
  HTMLDivElement,
  ReactionBarSelectorEmojiProps
>(({ reaction, onSelect }, ref) => {
  const { node, label, key } = reaction;
  console.log({key, label});
  

  // const handleClick = (id) => {
    // onSelect && onSelect(id);
    // 
  // };

  return (
    <Hover ref={ref} style={wrapStyle}>
      <HoverStyle hoverStyle={labelStyleHover} style={labelStyle}>
        {label}
      </HoverStyle>
      <HoverStyle
        hoverStyle={iconStyleHover}
        style={iconStyle}
        // onClick={(id)=>handleClick(id)}
      >
        {node}
      </HoverStyle>
    </Hover>
  );
});

const wrapStyle: React.CSSProperties = {
  padding: '5px',
  position: 'relative',
};
const labelStyleHover = {
  transform: 'translateX(-50%) translateY(-10px)',
  opacity: '1',
};
const labelStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-22px',
  background: 'rgba(0,0,0,.8)',
  borderRadius: '14px',
  color: '#fff',
  fontSize: '11px',
  padding: '4px 7px 3px',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  left: '50%',
  transform: 'translateX(-50%)',
  transition: '200ms transform cubic-bezier(0.23, 1, 0.32, 1)',
  opacity: '0',
  fontFamily: 'sans-serif',
};
const iconStyle = {
  transformOrigin: 'bottom',
  cursor: 'pointer',
  transition: '200ms transform cubic-bezier(0.23, 1, 0.32, 1)',
};
const iconStyleHover = { transform: 'scale(1.3)' };

export default ReactionBarSelectorEmoji;
