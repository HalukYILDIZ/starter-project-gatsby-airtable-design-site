import React from "react"
import GoogleMapReact from "google-map-react"
import { Icon } from "@iconify/react"
import locationIcon from "@iconify/icons-mdi/map-marker"

import IntroSection from "./components/intro/Intro"
import ContactSection from "./components/contact-section/ContactSection"
import DisclaimerSection from "./components/disclaimer/Disclaimer"
import FooterSection from "./components/footer/Footer"

import "./adres.css"

import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"
import { Envelope } from "@styled-icons/fa-solid"

const AnyReactComponent = ({ text }) => <div>{text}</div>

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Adres = props => {
  const koordinatlar = {
    center: {
      lat: 39.576849,
      lng: 32.150454,
    },
    zoom: 11,
  }

  return (
    <Layout>
      <div className="App">
        <IntroSection />
        <ContactSection />
        <div className="map">
          <h2 className="map-h2">Gelin Bizi Yerimizde Ziyaret Edin </h2>
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.GOOGLE_API_KEY,
              }}
              defaultCenter={koordinatlar.center}
              defaultZoom={koordinatlar.zoom}
            >
              <LocationPin
                lat={39.576849}
                lng={32.150454}
                text="ZİHA TARIMSAL İNAVASYON MERKEZİ"
              />
            </GoogleMapReact>
          </div>
        </div>
        <DisclaimerSection />
        <FooterSection />
      </div>
    </Layout>
  )
}

const Wrapper = styled.main`
  margin-top: -5rem;
  background: var(--clr-primary-8);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  div {
    text-align: center;
    color: var(--clr-white);
  }
  h1 {
    font-size: 2rem;
    color: var(--clr-primary-5);
    margin-bottom: 1.5rem;
  }
  @media (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
  }
`

export default Adres
