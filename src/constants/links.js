import React from "react"
import {
  FaMap,
  FaTasks,
  FaFileAlt,
  FaRegAddressCard,
  FaRegAddressBook,
  FaMailBulk,
  FaPills,
  FaSearch,
} from "react-icons/fa"
export default [
  {
    page: "HİZMETLERİMİZ",
    label: "İlaçlama",
    url: `/products/payments`,
    icon: <FaPills className="icon" />,
  },
  {
    page: "HİZMETLERİMİZ",
    label: "Analiz",
    url: `/posts/analiz`,
    icon: <FaSearch className="icon" />,
  },
  {
    page: "HİZMETLERİMİZ",
    label: "haritalama",
    url: `/posts/haritalama`,
    icon: <FaMap className="icon" />,
  },
  {
    page: "YAZILARIMIZ",
    label: "Tüm yazılar",
    url: `/posts`,
    icon: <FaFileAlt className="icon" />,
  },
  {
    page: "YAZILARIMIZ",
    label: "DJI_Agras MG1-P",
    url: `/products/payments`,
    icon: <FaFileAlt className="icon" />,
  },
  {
    page: "YAZILARIMIZ",
    label: "DJI_Phantom 4-RTK",
    url: `/products/payments`,
    icon: <FaFileAlt className="icon" />,
  },
  {
    page: "YAZILARIMIZ",
    label: "DJI_Agras T-16",
    url: `/posts/dji-agras-t-16`,
    icon: <FaFileAlt className="icon" />,
  },
  {
    page: "hakkımızda",
    label: "biz kimiz?",
    url: `/products/payments`,
    icon: <FaRegAddressBook className="icon" />,
  },
  {
    page: "hakkımızda",
    label: "misyonumuz",
    url: `/products/payments`,
    icon: <FaTasks className="icon" />,
  },
  {
    page: "hakkımızda",
    label: "telefon/adres",
    url: `/products/payments`,
    icon: <FaRegAddressCard className="icon" />,
  },
  {
    page: "hakkımızda",
    label: "mail gönder",
    url: `/products/payments`,
    icon: <FaMailBulk className="icon" />,
  },
]
