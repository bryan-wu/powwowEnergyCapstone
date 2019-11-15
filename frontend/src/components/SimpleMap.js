import React, { Component } from 'react';
import coordinates1 from './CoordinatesSB'
import coordinates2 from './CoordinatesAlameda'
import axios from "axios";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polygon } from "react-google-maps"


const GMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=000",
        loadingElement: <div style={{ height: `200%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap

)((props) =>
	<GoogleMap defaultZoom={7} defaultCenter={{ lat: 34.4208, lng: -119.6982 }}>
		{console.log(props.polygons)}
		{props.polygons}
		{/* {Array.from(props.polygons).map(item => (
			<Polygon
				key={item.id}
				path={item.coordinates}
				options={{
					fillColor: "#FF0000",
					fillOpacity: 0.4,
					strokeColor: "FF0000",
					strokeOpacity: 1,
					strokeWeight: 1
				}}
			/>
		))} */}
		{/*} {props.isMarkerShown && <Marker position={{ lat: 41.015137, lng: 28.979530 }} />}*/}
		{/* <Polygon
			path={coordinates1}
			options={{
				fillColor: "#FF0000",
				fillOpacity: 0.4,
				strokeColor: "FF0000",
				strokeOpacity: 1,
				strokeWeight: 1
			}} />
		<Polygon
			path={coordinates2}
			options={{
				fillColor: "#FF0000",
				fillOpacity: 0.4,
				strokeColor: "FF0000",
				strokeOpacity: 1,
				strokeWeight: 1
			}} /> */}
	</GoogleMap>	
		
)

class SimpleMap extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			fieldDataList: []
		};
	}
	componentDidMount() {
		console.log("Component did mount");
		this.refreshList();
		console.log(this.state.fieldDataList.length);
		console.log("Finish component mounting");
	}
	refreshList = () => {
		axios
			.get("http://localhost:5000/field")
			.then(res => this.setState({ fieldDataList: res.data }))
			.catch(err => console.log(err));
	};
	drawPolygons = () => {
		console.log("Draw polygons:" + this.state.fieldDataList.length);
		var polygons = []
		for (var i = 0; i < this.state.fieldDataList.length; ++i) {
			if (i == 0)
			{
				console.log(this.state.fieldDataList[i].id);
				console.log(this.state.fieldDataList[i].coordinates);
			}
			polygons.push(
				<Polygon
					key={this.state.fieldDataList[i].id}
					path={this.state.fieldDataList[i].coordinates}
					options={{
						fillColor: "#FF0000",
						fillOpacity: 0.4,
						strokeColor: "FF0000",
						strokeOpacity: 1,
						strokeWeight: 1
					}}
				/>
			);
		}
		console.log("Polygon return length:" + polygons.length);
		return polygons;
	};

	render() {

		return (
			<div>
				<GMap polygons={this.drawPolygons()} />
				{/* <GMap polygons={this.state.fieldDataList} /> */}
				<div className="btn-group dropright mt-2 mr-2">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
						Filter by Crop
					</button>
					<div className="dropdown-menu">
						<button className="dropdown-item" type="button">Almond</button>
						<button className="dropdown-item" type="button">Pistachio</button>
						<button className="dropdown-item" type="button">Something</button>
					</div>
				</div>

				<div className="btn-group dropright mt-2">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
						Filter by Year
					</button>
					<div className="dropdown-menu">
						<button className="dropdown-item" type="button">year1</button>
						<button className="dropdown-item" type="button">year2</button>
						<button className="dropdown-item" type="button">year3</button>
					</div>
				</div>
			</div>
			
		)
	}
}

export default SimpleMap;