import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';
import { FaReact, FaAws, FaNode } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di"

class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    gotoImage (index) {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }
    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.src}
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <ul className="icons">
                       <li><a href="https://reactjs.org/" className="icon"><FaReact/></a></li>
                        <li><a href="https://aws.amazon.com/" className="icon"><FaNode/></a></li>
                        <li><a href="https://www.mongodb.com/" className="icon"><DiMongodb/></a></li>
                        <li><a href="https://aws.amazon.com/" className="icon"><FaAws/></a></li>
                        <li><a href="#" className="icon"><img src={obj.icons.GraphQL} alt=""/></a></li>

                    </ul>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderGallery()}
                {/*<Lightbox*/}
                    {/*currentImage={this.state.currentImage}*/}
                    {/*images={this.props.images}*/}
                    {/*isOpen={this.state.lightboxIsOpen}*/}
                    {/*onClickImage={this.handleClickImage}*/}
                    {/*onClickNext={this.gotoNext}*/}
                    {/*onClickPrev={this.gotoPrevious}*/}
                    {/*onClickThumbnail={this.gotoImage}*/}
                    {/*onClose={this.closeLightbox}*/}
                {/*/>*/}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;