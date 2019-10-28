import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PDFDownloadLink } from "@react-pdf/renderer";
import HorizontalNav from './components/HorizontalNav';
import MyDocument from './components/MyDocument';
import SimpleMap from './components/SimpleMap'

import Test from './index_db_test' // TUTORIAL USE ONLY

import './index.css';


  // Text box for Analysis text
  class Analysis extends Component {
    render() {
      const analysisText = 'analysis text goes here';
      return (
        <div className="card">
          <h5 className="card-header">Water Efficiency</h5>
          <div className="card-body">
            <p className="card-text">analysis text goes here!</p>
            <PDFDownloadLink 
              document={<MyDocument data={analysisText}/>}
              fileName="efficiencyAnalysis.pdf"
              className="btn btn-primary"
            >
              Download PDF
            </PDFDownloadLink>
          </div>
        </div>
      );
    }
  }

  class MainBody extends Component {
    render() {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <SimpleMap />
            </div>
            <div className="col-md-6">
              <Analysis />
            </div>
          </div>
        </div>
      );
    }
  }


  class Home extends Component {
    render(){
      return (
        <>
          <HorizontalNav />
          <MainBody />
          
          <Test />
        </>
      );
    }
  }
// ========================================


ReactDOM.render(
		<Home />,
		document.getElementById('root')
);
