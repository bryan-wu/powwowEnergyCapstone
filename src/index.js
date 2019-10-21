import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';
import HorizontalNav from './HorizontalNav';
import './index.css';

const AnyReactComponent = ({ marker }) => <div>{marker}</div>;

 /*// This component is only a placeholder for now
 // It should be replaced with Google map area later *
  class MapArea extends Component {
    render() {
      return (
        <div class="card">
          <h5 class="card-header">placeholder</h5>
          <div class="card-body">
            <p class="card-text">This is only a placeholder for Google map</p>
          </div>
        </div>
      );
    }
  }*/
  

  class SimpleMap extends Component {
	  static defaultProps = {
		center: {
		  lat: 34.42,
		  lng: 119.69
		},
		zoom: 8
		
	  };
	 
	  render() {
		return (
		  // Important! Always set the container height explicitly
		  <div style={{ height: '500px', width: '100%' }}>
			<GoogleMapReact
			  bootstrapURLKeys={{ key: 'AIzaSyCgi0P05okXVDaayvOKj80KJC2JU_p3A2k' }}
			  defaultCenter={this.props.center}
			  defaultZoom={this.props.zoom}
			>
			  <AnyReactComponent
				lat={34.4208}
				lng={119.6982}
				marker="My Marker"
			  />
			</GoogleMapReact>
		  </div>
		);
	  }
}
export default SimpleMap;

  // Text box for Analysis text
  class Analysis extends Component {
    render() {
      return (
        <div class="card">
          <h5 class="card-header">Water Efficiency</h5>
          <div class="card-body">
            <p class="card-text">analysis text goes here!</p>
          </div>
        </div>
      );
    }
  }

  class MainBody extends Component {
    render() {
      return (
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6">
              <SimpleMap />
            </div>
            <div class="col-lg-6">
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
        </>
      );
    }
  }
// ========================================

ReactDOM.render(
		<Home />,
		document.getElementById('root')
);