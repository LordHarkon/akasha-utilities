const countries = [
    {
        name: "Andorra",
        code: "AD",
        currency: "EUR",
    },
    {
        name: "United Arab Emirates",
        code: "AE",
        currency: "AED",
    },
    {
        name: "Afghanistan",
        code: "AF",
        currency: "AFN",
    },
    {
        name: "Antigua and Barbuda",
        code: "AG",
        currency: "XCD",
    },
    {
        name: "Anguilla",
        code: "AI",
        currency: "XCD",
    },
    {
        name: "Albania",
        code: "AL",
        currency: "ALL",
    },
    {
        name: "Armenia",
        code: "AM",
        currency: "AMD",
    },
    {
        name: "Angola",
        code: "AO",
        currency: "AOA",
    },
    {
        name: "Antarctica",
        code: "AQ",
        currency: "",
    },
    {
        name: "Argentina",
        code: "AR",
        currency: "ARS",
    },
    {
        name: "American Samoa",
        code: "AS",
        currency: "USD",
    },
    {
        name: "Austria",
        code: "AT",
        currency: "EUR",
    },
    {
        name: "Australia",
        code: "AU",
        currency: "AUD",
    },
    {
        name: "Aruba",
        code: "AW",
        currency: "AWG",
    },
    {
        name: "Aland Islands",
        code: "AX",
        currency: "EUR",
    },
    {
        name: "Azerbaijan",
        code: "AZ",
        currency: "AZN",
    },
    {
        name: "Bosnia and Herzegovina",
        code: "BA",
        currency: "BAM",
    },
    {
        name: "Barbados",
        code: "BB",
        currency: "BBD",
    },
    {
        name: "Bangladesh",
        code: "BD",
        currency: "BDT",
    },
    {
        name: "Belgium",
        code: "BE",
        currency: "EUR",
    },
    {
        name: "Burkina Faso",
        code: "BF",
        currency: "XOF",
    },
    {
        name: "Bulgaria",
        code: "BG",
        currency: "BGN",
    },
    {
        name: "Bahrain",
        code: "BH",
        currency: "BHD",
    },
    {
        name: "Burundi",
        code: "BI",
        currency: "BIF",
    },
    {
        name: "Benin",
        code: "BJ",
        currency: "XOF",
    },
    {
        name: "Saint Barthelemy",
        code: "BL",
        currency: "EUR",
    },
    {
        name: "Bermuda",
        code: "BM",
        currency: "BMD",
    },
    {
        name: "Brunei",
        code: "BN",
        currency: "BND",
    },
    {
        name: "Bolivia",
        code: "BO",
        currency: "BOB",
    },
    {
        name: "Bonaire, Saint Eustatius and Saba",
        code: "BQ",
        currency: "USD",
    },
    {
        name: "Brazil",
        code: "BR",
        currency: "BRL",
    },
    {
        name: "Bahamas",
        code: "BS",
        currency: "BSD",
    },
    {
        name: "Bhutan",
        code: "BT",
        currency: "BTN",
    },
    {
        name: "Bouvet Island",
        code: "BV",
        currency: "NOK",
    },
    {
        name: "Botswana",
        code: "BW",
        currency: "BWP",
    },
    {
        name: "Belarus",
        code: "BY",
        currency: "BYN",
    },
    {
        name: "Belize",
        code: "BZ",
        currency: "BZD",
    },
    {
        name: "Canada",
        code: "CA",
        currency: "CAD",
    },
    {
        name: "Cocos Islands",
        code: "CC",
        currency: "AUD",
    },
    {
        name: "Democratic Republic of the Congo",
        code: "CD",
        currency: "CDF",
    },
    {
        name: "Central African Republic",
        code: "CF",
        currency: "XAF",
    },
    {
        name: "Republic of the Congo",
        code: "CG",
        currency: "XAF",
    },
    {
        name: "Switzerland",
        code: "CH",
        currency: "CHF",
    },
    {
        name: "Ivory Coast",
        code: "CI",
        currency: "XOF",
    },
    {
        name: "Cook Islands",
        code: "CK",
        currency: "NZD",
    },
    {
        name: "Chile",
        code: "CL",
        currency: "CLP",
    },
    {
        name: "Cameroon",
        code: "CM",
        currency: "XAF",
    },
    {
        name: "China",
        code: "CN",
        currency: "CNY",
    },
    {
        name: "Colombia",
        code: "CO",
        currency: "COP",
    },
    {
        name: "Costa Rica",
        code: "CR",
        currency: "CRC",
    },
    {
        name: "Cuba",
        code: "CU",
        currency: "CUP",
    },
    {
        name: "Cabo Verde",
        code: "CV",
        currency: "CVE",
    },
    {
        name: "Curacao",
        code: "CW",
        currency: "ANG",
    },
    {
        name: "Christmas Island",
        code: "CX",
        currency: "AUD",
    },
    {
        name: "Cyprus",
        code: "CY",
        currency: "EUR",
    },
    {
        name: "Czechia",
        code: "CZ",
        currency: "CZK",
    },
    {
        name: "Germany",
        code: "DE",
        currency: "EUR",
    },
    {
        name: "Djibouti",
        code: "DJ",
        currency: "DJF",
    },
    {
        name: "Denmark",
        code: "DK",
        currency: "DKK",
    },
    {
        name: "Dominica",
        code: "DM",
        currency: "XCD",
    },
    {
        name: "Dominican Republic",
        code: "DO",
        currency: "DOP",
    },
    {
        name: "Algeria",
        code: "DZ",
        currency: "DZD",
    },
    {
        name: "Ecuador",
        code: "EC",
        currency: "USD",
    },
    {
        name: "Estonia",
        code: "EE",
        currency: "EUR",
    },
    {
        name: "Egypt",
        code: "EG",
        currency: "EGP",
    },
    {
        name: "Western Sahara",
        code: "EH",
        currency: "MAD",
    },
    {
        name: "Eritrea",
        code: "ER",
        currency: "ERN",
    },
    {
        name: "Spain",
        code: "ES",
        currency: "EUR",
    },
    {
        name: "Ethiopia",
        code: "ET",
        currency: "ETB",
    },
    {
        name: "Finland",
        code: "FI",
        currency: "EUR",
    },
    {
        name: "Fiji",
        code: "FJ",
        currency: "FJD",
    },
    {
        name: "Falkland Islands",
        code: "FK",
        currency: "FKP",
    },
    {
        name: "Micronesia",
        code: "FM",
        currency: "USD",
    },
    {
        name: "Faroe Islands",
        code: "FO",
        currency: "DKK",
    },
    {
        name: "France",
        code: "FR",
        currency: "EUR",
    },
    {
        name: "Gabon",
        code: "GA",
        currency: "XAF",
    },
    {
        name: "United Kingdom",
        code: "GB",
        currency: "GBP",
    },
    {
        name: "Grenada",
        code: "GD",
        currency: "XCD",
    },
    {
        name: "Georgia",
        code: "GE",
        currency: "GEL",
    },
    {
        name: "French Guiana",
        code: "GF",
        currency: "EUR",
    },
    {
        name: "Guernsey",
        code: "GG",
        currency: "GBP",
    },
    {
        name: "Ghana",
        code: "GH",
        currency: "GHS",
    },
    {
        name: "Gibraltar",
        code: "GI",
        currency: "GIP",
    },
    {
        name: "Greenland",
        code: "GL",
        currency: "DKK",
    },
    {
        name: "Gambia",
        code: "GM",
        currency: "GMD",
    },
    {
        name: "Guinea",
        code: "GN",
        currency: "GNF",
    },
    {
        name: "Guadeloupe",
        code: "GP",
        currency: "EUR",
    },
    {
        name: "Equatorial Guinea",
        code: "GQ",
        currency: "XAF",
    },
    {
        name: "Greece",
        code: "GR",
        currency: "EUR",
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        code: "GS",
        currency: "GBP",
    },
    {
        name: "Guatemala",
        code: "GT",
        currency: "GTQ",
    },
    {
        name: "Guam",
        code: "GU",
        currency: "USD",
    },
    {
        name: "Guinea-Bissau",
        code: "GW",
        currency: "XOF",
    },
    {
        name: "Guyana",
        code: "GY",
        currency: "GYD",
    },
    {
        name: "Hong Kong",
        code: "HK",
        currency: "HKD",
    },
    {
        name: "Heard Island and McDonald Islands",
        code: "HM",
        currency: "AUD",
    },
    {
        name: "Honduras",
        code: "HN",
        currency: "HNL",
    },
    {
        name: "Croatia",
        code: "HR",
        currency: "HRK",
    },
    {
        name: "Haiti",
        code: "HT",
        currency: "HTG",
    },
    {
        name: "Hungary",
        code: "HU",
        currency: "HUF",
    },
    {
        name: "Indonesia",
        code: "ID",
        currency: "IDR",
    },
    {
        name: "Ireland",
        code: "IE",
        currency: "EUR",
    },
    {
        name: "Israel",
        code: "IL",
        currency: "ILS",
    },
    {
        name: "Isle of Man",
        code: "IM",
        currency: "GBP",
    },
    {
        name: "India",
        code: "IN",
        currency: "INR",
    },
    {
        name: "British Indian Ocean Territory",
        code: "IO",
        currency: "USD",
    },
    {
        name: "Iraq",
        code: "IQ",
        currency: "IQD",
    },
    {
        name: "Iran",
        code: "IR",
        currency: "IRR",
    },
    {
        name: "Iceland",
        code: "IS",
        currency: "ISK",
    },
    {
        name: "Italy",
        code: "IT",
        currency: "EUR",
    },
    {
        name: "Jersey",
        code: "JE",
        currency: "GBP",
    },
    {
        name: "Jamaica",
        code: "JM",
        currency: "JMD",
    },
    {
        name: "Jordan",
        code: "JO",
        currency: "JOD",
    },
    {
        name: "Japan",
        code: "JP",
        currency: "JPY",
    },
    {
        name: "Kenya",
        code: "KE",
        currency: "KES",
    },
    {
        name: "Kyrgyzstan",
        code: "KG",
        currency: "KGS",
    },
    {
        name: "Cambodia",
        code: "KH",
        currency: "KHR",
    },
    {
        name: "Kiribati",
        code: "KI",
        currency: "AUD",
    },
    {
        name: "Comoros",
        code: "KM",
        currency: "KMF",
    },
    {
        name: "Saint Kitts and Nevis",
        code: "KN",
        currency: "XCD",
    },
    {
        name: "North Korea",
        code: "KP",
        currency: "KPW",
    },
    {
        name: "South Korea",
        code: "KR",
        currency: "KRW",
    },
    {
        name: "Kosovo",
        code: "XK",
        currency: "EUR",
    },
    {
        name: "Kuwait",
        code: "KW",
        currency: "KWD",
    },
    {
        name: "Cayman Islands",
        code: "KY",
        currency: "KYD",
    },
    {
        name: "Kazakhstan",
        code: "KZ",
        currency: "KZT",
    },
    {
        name: "Laos",
        code: "LA",
        currency: "LAK",
    },
    {
        name: "Lebanon",
        code: "LB",
        currency: "LBP",
    },
    {
        name: "Saint Lucia",
        code: "LC",
        currency: "XCD",
    },
    {
        name: "Liechtenstein",
        code: "LI",
        currency: "CHF",
    },
    {
        name: "Sri Lanka",
        code: "LK",
        currency: "LKR",
    },
    {
        name: "Liberia",
        code: "LR",
        currency: "LRD",
    },
    {
        name: "Lesotho",
        code: "LS",
        currency: "LSL",
    },
    {
        name: "Lithuania",
        code: "LT",
        currency: "EUR",
    },
    {
        name: "Luxembourg",
        code: "LU",
        currency: "EUR",
    },
    {
        name: "Latvia",
        code: "LV",
        currency: "EUR",
    },
    {
        name: "Libya",
        code: "LY",
        currency: "LYD",
    },
    {
        name: "Morocco",
        code: "MA",
        currency: "MAD",
    },
    {
        name: "Monaco",
        code: "MC",
        currency: "EUR",
    },
    {
        name: "Moldova",
        code: "MD",
        currency: "MDL",
    },
    {
        name: "Montenegro",
        code: "ME",
        currency: "EUR",
    },
    {
        name: "Saint Martin",
        code: "MF",
        currency: "EUR",
    },
    {
        name: "Madagascar",
        code: "MG",
        currency: "MGA",
    },
    {
        name: "Marshall Islands",
        code: "MH",
        currency: "USD",
    },
    {
        name: "North Macedonia",
        code: "MK",
        currency: "MKD",
    },
    {
        name: "Mali",
        code: "ML",
        currency: "XOF",
    },
    {
        name: "Myanmar",
        code: "MM",
        currency: "MMK",
    },
    {
        name: "Mongolia",
        code: "MN",
        currency: "MNT",
    },
    {
        name: "Macao",
        code: "MO",
        currency: "MOP",
    },
    {
        name: "Northern Mariana Islands",
        code: "MP",
        currency: "USD",
    },
    {
        name: "Martinique",
        code: "MQ",
        currency: "EUR",
    },
    {
        name: "Mauritania",
        code: "MR",
        currency: "MRU",
    },
    {
        name: "Montserrat",
        code: "MS",
        currency: "XCD",
    },
    {
        name: "Malta",
        code: "MT",
        currency: "EUR",
    },
    {
        name: "Mauritius",
        code: "MU",
        currency: "MUR",
    },
    {
        name: "Maldives",
        code: "MV",
        currency: "MVR",
    },
    {
        name: "Malawi",
        code: "MW",
        currency: "MWK",
    },
    {
        name: "Mexico",
        code: "MX",
        currency: "MXN",
    },
    {
        name: "Malaysia",
        code: "MY",
        currency: "MYR",
    },
    {
        name: "Mozambique",
        code: "MZ",
        currency: "MZN",
    },
    {
        name: "Namibia",
        code: "NA",
        currency: "NAD",
    },
    {
        name: "New Caledonia",
        code: "NC",
        currency: "XPF",
    },
    {
        name: "Niger",
        code: "NE",
        currency: "XOF",
    },
    {
        name: "Norfolk Island",
        code: "NF",
        currency: "AUD",
    },
    {
        name: "Nigeria",
        code: "NG",
        currency: "NGN",
    },
    {
        name: "Nicaragua",
        code: "NI",
        currency: "NIO",
    },
    {
        name: "Netherlands",
        code: "NL",
        currency: "EUR",
    },
    {
        name: "Norway",
        code: "NO",
        currency: "NOK",
    },
    {
        name: "Nepal",
        code: "NP",
        currency: "NPR",
    },
    {
        name: "Nauru",
        code: "NR",
        currency: "AUD",
    },
    {
        name: "Niue",
        code: "NU",
        currency: "NZD",
    },
    {
        name: "New Zealand",
        code: "NZ",
        currency: "NZD",
    },
    {
        name: "Oman",
        code: "OM",
        currency: "OMR",
    },
    {
        name: "Panama",
        code: "PA",
        currency: "PAB",
    },
    {
        name: "Peru",
        code: "PE",
        currency: "PEN",
    },
    {
        name: "French Polynesia",
        code: "PF",
        currency: "XPF",
    },
    {
        name: "Papua New Guinea",
        code: "PG",
        currency: "PGK",
    },
    {
        name: "Philippines",
        code: "PH",
        currency: "PHP",
    },
    {
        name: "Pakistan",
        code: "PK",
        currency: "PKR",
    },
    {
        name: "Poland",
        code: "PL",
        currency: "PLN",
    },
    {
        name: "Saint Pierre and Miquelon",
        code: "PM",
        currency: "EUR",
    },
    {
        name: "Pitcairn",
        code: "PN",
        currency: "NZD",
    },
    {
        name: "Puerto Rico",
        code: "PR",
        currency: "USD",
    },
    {
        name: "Palestinian Territory",
        code: "PS",
        currency: "ILS",
    },
    {
        name: "Portugal",
        code: "PT",
        currency: "EUR",
    },
    {
        name: "Palau",
        code: "PW",
        currency: "USD",
    },
    {
        name: "Paraguay",
        code: "PY",
        currency: "PYG",
    },
    {
        name: "Qatar",
        code: "QA",
        currency: "QAR",
    },
    {
        name: "Reunion",
        code: "RE",
        currency: "EUR",
    },
    {
        name: "Romania",
        code: "RO",
        currency: "RON",
    },
    {
        name: "Serbia",
        code: "RS",
        currency: "RSD",
    },
    {
        name: "Russia",
        code: "RU",
        currency: "RUB",
    },
    {
        name: "Rwanda",
        code: "RW",
        currency: "RWF",
    },
    {
        name: "Saudi Arabia",
        code: "SA",
        currency: "SAR",
    },
    {
        name: "Solomon Islands",
        code: "SB",
        currency: "SBD",
    },
    {
        name: "Seychelles",
        code: "SC",
        currency: "SCR",
    },
    {
        name: "Sudan",
        code: "SD",
        currency: "SDG",
    },
    {
        name: "South Sudan",
        code: "SS",
        currency: "SSP",
    },
    {
        name: "Sweden",
        code: "SE",
        currency: "SEK",
    },
    {
        name: "Singapore",
        code: "SG",
        currency: "SGD",
    },
    {
        name: "Saint Helena",
        code: "SH",
        currency: "SHP",
    },
    {
        name: "Slovenia",
        code: "SI",
        currency: "EUR",
    },
    {
        name: "Svalbard and Jan Mayen",
        code: "SJ",
        currency: "NOK",
    },
    {
        name: "Slovakia",
        code: "SK",
        currency: "EUR",
    },
    {
        name: "Sierra Leone",
        code: "SL",
        currency: "SLL",
    },
    {
        name: "San Marino",
        code: "SM",
        currency: "EUR",
    },
    {
        name: "Senegal",
        code: "SN",
        currency: "XOF",
    },
    {
        name: "Somalia",
        code: "SO",
        currency: "SOS",
    },
    {
        name: "Suriname",
        code: "SR",
        currency: "SRD",
    },
    {
        name: "Sao Tome and Principe",
        code: "ST",
        currency: "STN",
    },
    {
        name: "El Salvador",
        code: "SV",
        currency: "USD",
    },
    {
        name: "Sint Maarten",
        code: "SX",
        currency: "ANG",
    },
    {
        name: "Syria",
        code: "SY",
        currency: "SYP",
    },
    {
        name: "Eswatini",
        code: "SZ",
        currency: "SZL",
    },
    {
        name: "Turks and Caicos Islands",
        code: "TC",
        currency: "USD",
    },
    {
        name: "Chad",
        code: "TD",
        currency: "XAF",
    },
    {
        name: "French Southern Territories",
        code: "TF",
        currency: "EUR",
    },
    {
        name: "Togo",
        code: "TG",
        currency: "XOF",
    },
    {
        name: "Thailand",
        code: "TH",
        currency: "THB",
    },
    {
        name: "Tajikistan",
        code: "TJ",
        currency: "TJS",
    },
    {
        name: "Tokelau",
        code: "TK",
        currency: "NZD",
    },
    {
        name: "Timor Leste",
        code: "TL",
        currency: "USD",
    },
    {
        name: "Turkmenistan",
        code: "TM",
        currency: "TMT",
    },
    {
        name: "Tunisia",
        code: "TN",
        currency: "TND",
    },
    {
        name: "Tonga",
        code: "TO",
        currency: "TOP",
    },
    {
        name: "Turkey",
        code: "TR",
        currency: "TRY",
    },
    {
        name: "Trinidad and Tobago",
        code: "TT",
        currency: "TTD",
    },
    {
        name: "Tuvalu",
        code: "TV",
        currency: "AUD",
    },
    {
        name: "Taiwan",
        code: "TW",
        currency: "TWD",
    },
    {
        name: "Tanzania",
        code: "TZ",
        currency: "TZS",
    },
    {
        name: "Ukraine",
        code: "UA",
        currency: "UAH",
    },
    {
        name: "Uganda",
        code: "UG",
        currency: "UGX",
    },
    {
        name: "United States Minor Outlying Islands",
        code: "UM",
        currency: "USD",
    },
    {
        name: "United States",
        code: "US",
        currency: "USD",
    },
    {
        name: "Uruguay",
        code: "UY",
        currency: "UYU",
    },
    {
        name: "Uzbekistan",
        code: "UZ",
        currency: "UZS",
    },
    {
        name: "Vatican",
        code: "VA",
        currency: "EUR",
    },
    {
        name: "Saint Vincent and the Grenadines",
        code: "VC",
        currency: "XCD",
    },
    {
        name: "Venezuela",
        code: "VE",
        currency: "VES",
    },
    {
        name: "British Virgin Islands",
        code: "VG",
        currency: "USD",
    },
    {
        name: "U.S. Virgin Islands",
        code: "VI",
        currency: "USD",
    },
    {
        name: "Vietnam",
        code: "VN",
        currency: "VND",
    },
    {
        name: "Vanuatu",
        code: "VU",
        currency: "VUV",
    },
    {
        name: "Wallis and Futuna",
        code: "WF",
        currency: "XPF",
    },
    {
        name: "Samoa",
        code: "WS",
        currency: "WST",
    },
    {
        name: "Yemen",
        code: "YE",
        currency: "YER",
    },
    {
        name: "Mayotte",
        code: "YT",
        currency: "EUR",
    },
    {
        name: "South Africa",
        code: "ZA",
        currency: "ZAR",
    },
    {
        name: "Zambia",
        code: "ZM",
        currency: "ZMW",
    },
    {
        name: "Zimbabwe",
        code: "ZW",
        currency: "ZWL",
    },
    {
        name: "Netherlands Antilles",
        code: "AN",
        currency: "ANG",
    },
];

export const getCountries = (): string[] => countries.map((country) => country.name);
export const getCountriesName = (): string[] => countries.map((country) => country.name);
export const getCountriesCode = (): string[] => countries.map((country) => country.code);
export const getCountriesCurrency = (): string[] => countries.map((country) => country.currency);
export const getCountryCode = (countryName: string): string => {
    const country = countries.find((country) => country.name === countryName);
    return country ? country.code : "";
};
export const getCountryCurrency = (countryNameOrCode: string): string => {
    let country = countries.find((country) => country.name === countryNameOrCode);
    if (!country) country = countries.find((country) => country.code === countryNameOrCode);
    return country ? country.currency : "";
};
export const getCountriesWithCurrency = (currency: string): string[] =>
    countries.filter((country) => country.currency === currency).map((country) => country.name);
export const getCountriesRegexName = (reg: string | RegExp): string[] =>
    countries.filter((country) => !!country.name.match(reg).length);
export const getCountriesRegexCode = (reg: string | RegExp): string[] =>
    countries.filter((country) => !!country.name.match(reg).length);
export const allCountries = [...countries];
