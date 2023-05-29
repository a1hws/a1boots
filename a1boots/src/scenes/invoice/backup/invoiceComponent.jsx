import React, {Component} from 'react';
import HeaderComponent from './headerComponent';
import ArticleComponent from './articleComponent';
import './style.css';
import { Box } from "@mui/material";

export default class InvoiceComponent extends Component{
  render(){
    return(
    <Box
    	 m="100px 0 5px 0"
    >
      <form>

        <HeaderComponent />
        <ArticleComponent />

      </form>
    </Box>  
    )
  }
}
