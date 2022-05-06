import React from 'react';

// Components
import { Header } from './components/Header/Header';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { ProductContent } from './components/ProductContent/ProductContent';

// DATA
import data from './data/data.json';

import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

// Global Styles
import './styles/global.css';

class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>

          {/* Header Component */}
          <Header title={data.article.title} />

          {/* Product Details */}
          <ProductDetails product={data.article} />

          {/* Product Content */}
          <ProductContent product={data.article} />

        </div>
      </ThemeProvider>
    )
  }
}

export default App;
