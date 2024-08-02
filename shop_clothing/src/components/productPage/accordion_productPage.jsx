import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "../../components_style/productPage/accordion_productPage_style.css"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderLeft: `5px solid #f16d7f`,
  borderBottom: `1px solid #ebebeb`,
  marginBottom: `20px`,
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
   
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
 
}));

export default function AccordionProductPage() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="accordion_productPage ">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="accordion__title">Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="accordion__content" >
						<a href="#" className="accordion__link">Accessories</a>
						<a href="#" className="accordion__link">Bags</a>
						<a href="#" className="accordion__link">Denim</a>
						<a href="#" className="accordion__link">Hoodies & Sweatshirts</a>
						<a href="#" className="accordion__link">Jackets & Coats</a>
						<a href="#" className="accordion__link">Pants</a>
						<a href="#" className="accordion__link">Polos</a>
						<a href="#" className="accordion__link">Shirts</a>
						<a href="#" className="accordion__link">Shoes</a>
						<a href="#" className="accordion__link">Shorts</a>
						<a href="#" className="accordion__link">Sweaters & Knits</a>
						<a href="#" className="accordion__link">T-Shirts</a>
						<a href="#" className="accordion__link">Tanks</a>
					</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="accordion__title">Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="accordion__content" >
						<a href="#" className="accordion__link">Accessories</a>
						<a href="#" className="accordion__link">Bags</a>
						<a href="#" className="accordion__link">Denim</a>
						<a href="#" className="accordion__link">Hoodies & Sweatshirts</a>
						<a href="#" className="accordion__link">Jackets & Coats</a>
						<a href="#" className="accordion__link">Pants</a>
						<a href="#" className="accordion__link">Polos</a>
						<a href="#" className="accordion__link">Shirts</a>
						<a href="#" className="accordion__link">Shoes</a>
						<a href="#" className="accordion__link">Shorts</a>
						<a href="#" className="accordion__link">Sweaters & Knits</a>
						<a href="#" className="accordion__link">T-Shirts</a>
						<a href="#" className="accordion__link">Tanks</a>
					</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="accordion__title">Designer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="accordion__content" >
						<a href="#" className="accordion__link">Accessories</a>
						<a href="#" className="accordion__link">Bags</a>
						<a href="#" className="accordion__link">Denim</a>
						<a href="#" className="accordion__link">Hoodies & Sweatshirts</a>
						<a href="#" className="accordion__link">Jackets & Coats</a>
						<a href="#" className="accordion__link">Pants</a>
						<a href="#" className="accordion__link">Polos</a>
						<a href="#" className="accordion__link">Shirts</a>
						<a href="#" className="accordion__link">Shoes</a>
						<a href="#" className="accordion__link">Shorts</a>
						<a href="#" className="accordion__link">Sweaters & Knits</a>
						<a href="#" className="accordion__link">T-Shirts</a>
						<a href="#" className="accordion__link">Tanks</a>
					</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}