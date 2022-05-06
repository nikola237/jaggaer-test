import React from 'react';

// MUI Components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const ProductContent = ({product}) => {

  // features
  const features = []
  for (const [key, value] of Object.entries(product.features)) {
    features.push(<li>{key} - {value}</li>)
  }

  // attachments
  const attachments = []
  for (const [index, value] of product.attachments.entries()) {
    attachments.push(<div>{value.file_label}</div>)
  }

  // attachments
  const keywords = []
  for (const [index, value] of product.keywords.entries()) {
    keywords.push(<div>{value}</div>)
  }


  // price breaks (table)
  const priceBreaksRows = []
  for (const [key, value] of Object.entries(product.price_breaks)) {
    priceBreaksRows.push({
      key: `ex ${key} PCE`,
      value: `${value} EUR/PCE`
    })
  }

  return (
      <Box
        className="page-section page-section--grey"
        sx={{
          'backgroundColor': 'lightGray',
          py: 4
        }}
      >
        <Container
          sx={{
            ml: 0
          }}
        >
          <Grid container spacing={2} className="debug">

            <Grid item sm={12}>

              <Typography
                variant="subtitle1"
                color="primary"
                sx={{
                  'textTransform': 'uppercase'
                }}
              >
                Description
              </Typography>

              {/* @TODO preformatted text (<pre>) - component="pre"  */}
              <Typography
                variant="body1"
              >
                {product.description_long}
              </Typography>
            </Grid>

            {/* Cards */}

            <Grid item sm={6}>

              {/* Card: Details */}
              <Card>
                <CardContent>

                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{
                      'textTransform': 'uppercase',
                      'mb': 1
                    }}
                  >
                    Details
                  </Typography>
                  <Divider />

                  <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                  >
                    Featuers
                  </Typography>
                  <ul>
                    {features}
                  </ul>

                  <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                  >
                    Attachments
                  </Typography>
                  {attachments}

                  <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                  >
                    Keywords
                  </Typography>
                  {keywords}


                </CardContent>
              </Card>

            </Grid>

            <Grid item sm={6}>

              {/* Card: Pricing & Shipping */}
              <Card>
                <CardContent>

                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{
                      'textTransform': 'uppercase',
                      'mb': 1
                    }}
                  >
                    Pricing & Shipping
                  </Typography>
                  <Divider />

                  <ul>
                    <li>
                      <Typography variant="body2">
                        Minimum order: <b>{product.minimum_order_quantity}</b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Shipping: <b>680.96 EUR</b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Delivery: <b>{product.delivery_time} days</b>
                      </Typography>
                    </li>
                  </ul>

                  <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                  >
                    Price breaks
                  </Typography>


                  <Table>
                    <TableBody>
                      {priceBreaksRows.map((row) => (
                        <TableRow
                          key={row.key}
                        >
                          <TableCell component="th" scope="row">
                            {row.key}
                          </TableCell>
                          <TableCell>
                            {row.value}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>


                </CardContent>
                </Card>

            </Grid>
                  </Grid>
        </Container>
      </Box>
  )
}
