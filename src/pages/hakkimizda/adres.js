import React from "react"
import GoogleMapReact from "google-map-react"
import { Icon } from "@iconify/react"
import locationIcon from "@iconify/icons-mdi/map-marker"
import Info from "./Info"
import SEO from "../../components/seo"

import "./adres.css"

import { Layout } from "../../components"

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Adres = props => {
  const koordinatlar = {
    center: {
      lat: 39.9075021,
      lng: 32.7575053,
    },
    zoom: 15,
  }

  return (
    <Layout>
         <SEO
        title="Adres"
        description="ZİHA tarımsal inavasyon merkezi"
      />
      <Info />
      <div className="map">
        {/* <h2 className="map-h2">Gelİn Bİzİ Yerİmİzde Zİyaret Edİn </h2> */}
        <div className="google-map">
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GOOGLE_API_KEY,
            }}
            defaultCenter={koordinatlar.center}
            defaultZoom={koordinatlar.zoom}
          >
            <LocationPin
              lat={39.9075021}
              lng={32.7575053}
              text="ZİHA TARIMSAL İNAVASYON MERKEZİ"
            />
          </GoogleMapReact> */}
        </div>
      </div>
      {/* </div> */}
    </Layout>
  )
}

export default Adres
