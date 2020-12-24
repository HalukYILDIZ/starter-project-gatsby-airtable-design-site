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
  FaShoppingCart,
} from "react-icons/fa"
export default [
  {
    page: "HİZMETLERİMİZ",
    label: "DronMarket",
    url: `https://shop.zihatim.com/`,
    icon: <FaShoppingCart className="icon" />,
  },
  {
    page: "HİZMETLERİMİZ",
    label: "Plan Haritası",
    url: `https://map.zihatim.com/`,
    icon: <FaMap className="icon" />,
  },
  {
    page: "HİZMETLERİMİZ",
    label: "İlaçlama",
    url: `/posts/ilaclama`,
    icon: <FaPills className="icon" />,
  },
  {
    page: "HİZMETLERİMİZ",
    label: "Analiz",
    url: `/posts/analiz`,
    icon: <FaSearch className="icon" />,
  },

  {
    page: "YAZILARIMIZ",
    label: "Tüm yazılar",
    url: `/posts`,
    icon: <FaFileAlt className="icon" />,
  },
  {
    page: "YAZILARIMIZ",
    label: "DJI Agras T-16",
    url: `/posts/dji-agras-t-16`,
    icon: <FaFileAlt className="icon" />,
  },
  {
    page: "YAZILARIMIZ",
    label: "DJI Agras MG1P",
    url: `/posts/dji-agras-mg1-p`,
    icon: <FaFileAlt className="icon" />,
  },
  {
    page: "YAZILARIMIZ",
    label: "DJI Phantom 4",
    url: `/posts/phantom-4-rtk`,
    icon: <FaFileAlt className="icon" />,
  },
  {
    page: "YAZILARIMIZ",
    label: "haritalama",
    url: `/posts/haritalama`,
    icon: <FaMap className="icon" />,
  },

  {
    page: "hakkımızda",
    label: "biz kimiz?",
    url: `/hakkimizda/bizkimiz`,
    icon: <FaRegAddressBook className="icon" />,
  },
  {
    page: "hakkımızda",
    label: "misyonumuz",
    url: `/hakkimizda/misyonumuz`,
    icon: <FaTasks className="icon" />,
  },
  {
    page: "hakkımızda",
    label: "telefon/adres",
    url: `/hakkimizda/adres`,
    icon: <FaRegAddressCard className="icon" />,
  },
  {
    page: "hakkımızda",
    label: "mail gönder",
    url: `/hakkimizda/mail`,
    icon: <FaMailBulk className="icon" />,
  },
]
