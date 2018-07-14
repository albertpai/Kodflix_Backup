import React from 'react';
import './Details.css';
import galleryGet from '../Gallery/gallery-get.js';


export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, this will be the details page for each Movie & TV show :)"
        }
    }

    
    componentDidMount() {
        this.changeMessage();
    }

    changeMessage() {

        let selectedShow = galleryGet.find ((galleryGet) => {
            return galleryGet.id == this.props.match.params.id
        });
        
        let showTitle = selectedShow.title;

        setTimeout(() => {this.setState({message: showTitle})}
        // keep showTitle as a string
        , 3000)
    }

    render() {


        // let showIndex = galleryGet.findIndex((x) => x===`${this.props.match.params.id}`)
        // let showTitle = galleryGet[showIndex].title

        return (
            <div>
                <h2>
                    {this.state.message}
                </h2>
            </div>
        )
    

    }
};