/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  View,
  StyleSheet,
  PDFDownloadLink,
  Text,
  Image,
} from '@react-pdf/renderer'
import { Printer } from 'lucide-react'
import watermarkImage from '../../public/img/PrescriAppLogo.png'
import { useState, useEffect } from 'react'

interface Props {
  section: {
    title: string | null
    description1: { desc1: string | null; desc2: string | null }[]
    description3: string | null
  }[]
  title: string
}

export function RenderPdf({ section, title }: Props) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const watermarkImageUrl =
    typeof watermarkImage === 'string' ? watermarkImage : watermarkImage.src

  const styles = StyleSheet.create({
    page: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#FFFFFF',
      padding: 0,
    },
    header: {
      width: '100%',
      textAlign: 'center',
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    watermark: {
      width: '30%',
      height: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: '20px',
    },
    titleContent: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      paddingVertical: '5px',
    },
    title: {
      fontSize: '20px',
      color: '#008000',
    },
    sectionItem: {
      marginTop: '10px',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'gray',
    },
    sectionTitle: {
      paddingHorizontal: '10px',
      paddingVertical: '3px',
    },
    sectionMed2: {
      display: 'flex',
      flexDirection: 'row',
    },
    sectionMed: {
      display: 'flex',
      flexDirection: 'row',
    },
    medSection: {
      width: '40%',
      paddingHorizontal: '10px',
      paddingVertical: '3px',
      borderTopWidth: 1,
      borderTopColor: 'gray',
      borderLeftStyle: 'solid',
    },
    medText: {
      fontSize: '12px',
    },
    qtdSection: {
      width: '60%',
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderLeftColor: 'gray',
      borderTopColor: 'gray',
      paddingVertical: '3px',
    },
    qdtText: {
      paddingHorizontal: '10px',
      fontSize: '12px',
    },
    descriptionSection: {
      width: '100%',
      borderTopWidth: 1,
      borderLeftStyle: 'solid',
      borderTopColor: 'gray',
      paddingVertical: '5px',
    },
    descriptionText: {
      paddingHorizontal: '10px',
      fontSize: '12px',
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: '10px',
    },
    footer: {
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
      fontSize: '12px',
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: 'gray',
    },
    draCrn: {
      marginBottom: '5px',
    },
  })
  const MyDocument = () => (
    <Document>
      <Page size="A4" wrap style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.watermark} src={watermarkImageUrl} />
        </View>
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {section.map((sec, index) => (
            <View style={styles.sectionItem} wrap={false} key={index}>
              <View style={styles.sectionTitle}>
                <Text>{sec.title}</Text>
              </View>
              {sec.description1.map((desc1, index) => (
                <View
                  key={index}
                  style={
                    index % 2 === 0 ? styles.sectionMed : styles.sectionMed2
                  }
                >
                  <View style={styles.medSection}>
                    <Text style={styles.medText}>{desc1.desc1}</Text>
                  </View>
                  <View style={styles.qtdSection}>
                    <Text style={styles.qdtText}>{desc1.desc2}</Text>
                  </View>
                </View>
              ))}
              <View style={styles.descriptionSection}>
                <Text style={styles.descriptionText}>{sec.description3}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.footerContent}>
          <View wrap={false} style={styles.footer}>
            <Text style={styles.draCrn}>
              DRA. TERESA CRISTINA BARBOSA DA SILVA - CRN 11 2830
            </Text>
            <Text>NUTRICIONISTA CLÍNICA</Text>
          </View>
        </View>
      </Page>
    </Document>
  )

  return isClient ? (
    <PDFDownloadLink document={<MyDocument />} fileName={`teste.pdf`}>
      <button className="flex items-center justify-between gap-2 rounded bg-green-600 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-95 mobile:text-xs laptop:text-base">
        <Printer size={20} />
        <p>Imprimir</p>
      </button>
    </PDFDownloadLink>
  ) : null
}
