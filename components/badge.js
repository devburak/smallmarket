import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles(theme => ({
    badge: {
      right: -3,
      top: 3,
      border: `.8px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

export default function SBadge(props) {
    const {content=0,color='secondary'} = props
  return (

      <StyledBadge  badgeContent={content} color={color}>
        {props.children}
      </StyledBadge>
 
  );
}