import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, ButtonBase, List, ListItem, Collapse } from '@mui/material';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { SvgIcon } from '@mui/material';


export const SideNavItem = (props) => {
  // Destructuring props to get specific values or set default values
  const { active = false, disabled, external, icon, path, title, subNav } = props;

  // State variable 'open' and function 'setOpen' from the useState hook
  const [open, setOpen] = useState(false);

  // Function to toggle the 'open' state when the button is clicked
  const handleToggle = () => {
    console.log('handleToggle called');
    setOpen(!open);
  };

  // Conditional rendering for linkProps based on whether 'path' is provided
  const linkProps = path
    ? external
      ? {
        component: 'a',
        href: path,
        target: '_blank'
      }
      : {
        component: NextLink,
        href: path
      }
    : {};

  // JSX structure representing a list item with a clickable button
  return (
    <li>
      <ButtonBase
        onClick={subNav ? handleToggle : undefined} // Handle submenu toggle only if subNav exists
        // Styling using MUI's sx prop
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',
          mt: '12px',
          textAlign: 'left',
          width: '100%',
          // Conditional styles based on 'active' state
          ...(active && {
            backgroundColor: 'neutral.50' // Background color for active nav item
          }),
          '&:hover': {
            backgroundColor: 'neutral.300' // Background color when hovering
          }
        }}
        // Spread operator to pass linkProps as attributes to the ButtonBase component
        {...linkProps}
        // onClick event handler to toggle the 'open' state
      >
        {icon && (
          <Box
            // Styling for an inline box
            component="span"
            sx={{
              alignItems: 'center',
              color: 'neutral.600', // Color of the inactive icon
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              // Conditional style for the active icon color
              ...(active && {
                color: 'neutral.700' // Color of the active icon
              })
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          // Styling for an inline box
          component="span"
          sx={{
            color: 'neutral.500', // Color of the inactive text
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            // Conditional style for the active text color
            ...(active && {
              color: 'neutral.700' // Color of the active text
            }),
            // Conditional style for the disabled text color
            ...(disabled && {
              color: 'neutral.500' // Color of the disabled text
            })
          }}
        >
          {title}
        </Box>
        {/* Conditional rendering for the chevron icon */}
        {subNav !== undefined && (
          <Box
            component="span"
            sx={{
              color: 'neutral.500'
            }}
          > {/* Conditional for opening and closing the sub-menu icon*/}
            {open ? 
              <SvgIcon fontSize="small"><ChevronUpIcon /></SvgIcon>
              : 
              <SvgIcon fontSize="small"><ChevronDownIcon /></SvgIcon>
            }
          </Box>
        )}
      </ButtonBase>

    
        {/* Submenu for Members */}
        {subNav && (
          <Box component="span" sx={{
            backgroundColor: 'neutral.900'
          }}>

          <Collapse in={open}>
            <List component="ul" disablePadding>
              {subNav.map((subNavItem) => (
                <ListItem
                  key={subNavItem.title} 
                  sx={{
                    pl: 4,
                    pb: 0,
                    ...(subNavItem.active && {
                      backgroundColor: 'neutral.50'
                    }),
                  }}>
                  <SideNavItem {...subNavItem} active={subNavItem.active}
                    
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
          </Box>

        )}

    </li>
  );
};

// PropTypes to define the expected types of props for SideNavItem
SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  subNav: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
};
