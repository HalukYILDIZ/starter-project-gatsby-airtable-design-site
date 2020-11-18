import React from "react"
import { Icon, InlineIcon } from "@iconify/react"

import locationIcon from "@iconify/icons-mdi/map-marker-radius-outline"
import phoneIcon from "@iconify/icons-mdi/phone-outline"
import emailIcon from "@iconify/icons-mdi/email-multiple-outline"

import facebookIcon from "@iconify/icons-mdi/facebook"
import linkedinIcon from "@iconify/icons-mdi/linkedin"
import twitterIcon from "@iconify/icons-mdi/twitter"

import "./info.css"

const contactDetails = [
  {
    value: "06510 Mustafa Kemal Mah.,Dumlupınar Bulvarı, Tepe Prime, A blok, Kat: 0,KNo:266, DNo:18, Çankaya/ANKARA.",
    icon: locationIcon,
  },
  { value: "+90 312 945 4791", icon: phoneIcon },
  { value: "info@zihatim.com", icon: emailIcon },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))

const renderIcons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Icon icon={icon} key={key} className="info-info-icon" />
  ))

const Info = () => (
  <section className="info-infocontact">
    <h2 className="info-info-h2">İLETİŞİM BİLGİLERİ</h2>

    <div className="info-info-details-container">{renderContactDetails()}</div>

    <div className="info-info-icons-container">{renderIcons()}</div>
  </section>
)

export default Info
