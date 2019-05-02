import React, { Component } from 'react'
import Card from './Card'
import Spinner from './Spinner'
import axios from 'axios'

const imageAddIncrement = 12
let   images            = 12
let   page              = 1

export class Gallery extends Component {

    constructor() {
        super()

        this.state = {
            galleryItems: [],
            currentPage: 1,
            galleryItemLimit: 12,
            isLoading: false,
        }
    }

    fetchImages() {
        
        this.setState({ isLoading: true })

        axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${images}`)
        
        .catch((error) => {

            console.log(error);
        })
        .then((response) => {

            console.log(response);
            this.setState({ galleryItems: response.data })
            this.setState({ isLoading: false })
        })            
    }

    componentDidMount() {
        this.fetchImages()
        this.isBottom()
    }

    isBottom() {
        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
               console.log("you're at the bottom of the page");
               page = page + 1            
               images = images + imageAddIncrement
               this.fetchImages()
            }
         });
    }

    render() {
        return (
            <div className='container'>
                <div className='gallery'>
                    {
                        this.state.galleryItems.map((item) => (
                            <Card
                                key={item.id}
                                img={item.download_url}
                            />
                        ))                    
                    }                
                </div>    
                {
                    this.state.isLoading &&
                        <Spinner/>
                }
            </div>
        )
    }
}

export default Gallery
