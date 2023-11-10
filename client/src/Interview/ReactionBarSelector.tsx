import React from 'react';
import { Reaction } from './helpers';
import ReactionBarSelectorEmoji from './ReactionBarSelectorEmoji';
// import { useAppDispatch } from '../redux/store';
// import { addReaction } from './reducer/InterviewPageSlice';

export interface ReactionBarSelectorProps {
  iconSize?: number;
  reactions?: Reaction[];
  onSelect?: (id: number) => void;
  style?: React.CSSProperties;
}

// const dispatch = useAppDispatch()



export const ReactionBarSelector = React.forwardRef<
  HTMLDivElement,
  ReactionBarSelectorProps
>(
  (
    {
      iconSize = defaultProps.iconSize,
      reactions = defaultProps.reactions,
      onSelect = defaultProps.onSelect,
      style = defaultProps.style,
    },
    ref
  ) => {
    const emojiStyle = React.useMemo(() => {
      return {
        width: `${iconSize + 10}px`,
        height: `${iconSize + 10}px`,
        display: 'flex',
        alignItems: 'center',
        fontSize: iconSize,
      };
    }, [iconSize]);

    // const handleSelect = (id: number) => {
    //   onSelect && onSelect(id);
    //   // dispatch(addReaction(id)); // Dispatch the ID when a reaction is selected
    // };
    

    return (
      <div ref={ref} style={{ ...wrapStyle, ...style }}>
        {reactions.map((reaction: Reaction) => {
          return (
            <div style={emojiStyle} key={reaction.key ?? reaction.label}>
              <ReactionBarSelectorEmoji
                reaction={reaction}
                onSelect={onSelect}
              />
            </div>
          );
        })}
      </div>
    );
  }
);

export const defaultProps: Required<ReactionBarSelectorProps> = {
  style: {},
  reactions: [
    { id: 1, node: <div>❤️</div>, label: 'love', key: 'love' },
    { id: 5, node: <div>🤔</div>, label: 'love', key: 'love' },
    { id: 3, node: <div>😍</div>, label: 'love', key: 'love' },
    { id: 2, node: <div>✨</div>, label: 'love', key: 'love' },
    { id: 4, node: <div>🤯</div>, label: 'love', key: 'love' },
    { id: 6, node: <div>😳</div>, label: 'love', key: 'love' },
    { id: 7, node: <div>👏🏻</div>, label: 'love', key: 'love' },
    { id: 8, node: <div>😂</div>, label: 'love', key: 'love' },
    { id: 9, node: <div>🌚</div>, label: 'love', key: 'love' },

  ],
  iconSize: 38,
  onSelect: (id: number) => {
     },
};

const wrapStyle = {
  backgroundColor: '#fff',
  borderRadius: '50px',
  padding: '2px',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .15)',
  display: 'flex',
  width: 'fit-content',
};

export default ReactionBarSelector;
