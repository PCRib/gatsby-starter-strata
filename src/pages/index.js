import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import GraphQL from '../assets/images/SVGS/graphql.svg'

import thumb01 from '../assets/images/thumbs/Waitr.png'
import thumb02 from '../assets/images/thumbs/hintsjs.png'
import thumb03 from '../assets/images/thumbs/wastemans.png'
import thumb04 from '../assets/images/thumbs/pokegraph.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: 'https://waitrapp.herokuapp.com/',
    thumbnail: thumb01,
    caption: 'Waitr App',
    description: 'Marketplace and work management for catering servers.',
    icons: { GraphQL },
  },
  {
    id: '2',
    src: 'https://hintsjs.netlify.com/',
    thumbnail: thumb02,
    caption: 'Hints.js',
    description: 'Blog page for former Brainstation students to connect.',
    icons: { GraphQL },
  },
  {
    id: '3',
    src: 'https://hintsjs.netlify.com/',
    thumbnail: thumb03,
    caption: 'WasteMans',
    description: 'Waste management app to help confusion over how to recycle.',
    icons: { GraphQL },
  },
  {
    id: '4',
    src: 'https://hintsjs.netlify.com/',
    thumbnail: thumb04,
    caption: 'PokeGraph',
    description: `All the pokemon stats you'd ever need!.`,
    icons: { GraphQL },
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  sendEmail = e => {
    e.preventDefault()
    let emailSent = {
      senderName: e.target.name.value,
      email: e.target.email.value,
      msg: e.target.message.value,
    }
    console.log(emailSent)
    let postBody = {
      method: 'POST',
      body: JSON.stringify(emailSent),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    fetch('https://pure-headland-41711.herokuapp.com/sendEmail', postBody)
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(err => console.log(err))
    e.target.name.value = ''
    e.target.email.value = ''
    e.target.message.value = ''
  }

  render() {
    const siteTitle = 'PCRib Portofolio'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Below is my portfolio <br />
                but first let me introduce myself.
              </h2>
            </header>
            <p>
              I'm a passionate developer that's always looking to make the best
              experiences. New technologies intrigue me and I just can't get
              enough of them, but that's not all I am. I love all things sports,
              comics, and the biggest fan there is of Sci-fi/Fantasy movies and
              books. Looking at my portfolio you can see my passion and
              interests resonating through and that's what I'm most proud of.
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description, icons }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  icons,
                })
              )}
            />

            <ul className="actions">
              {DEFAULT_IMAGES.length === 6 ? (
                <li>
                  <a href="#" className="button">
                    Full Portfolio
                  </a>
                </li>
              ) : (
                <li>
                  <a href="#" className="button">
                    More Coming...
                  </a>
                </li>
              )}
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              If you'd like to contact me, just leave your name/company, email
              and a quick message and I'll get back to you right away!
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  onSubmit={e => {
                    this.sendEmail(e)
                  }}
                  method="post"
                  action="#"
                >
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <input type="submit" value="Send Message" />
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Midtown
                    <br />
                    Toronto, Ontario
                    <br />
                    Canada
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">Paulocesarribeiro89@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
