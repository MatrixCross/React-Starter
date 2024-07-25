import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import demo from '../locales'

export default function (lng: string = 'en') {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: {
            ...demo.en,
          },
        },
        zh: {
          translation: {
            ...demo.zh,
          },
        },
      },
      lng,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    })
}
