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

interface Props {
  section: {
    title: string | null
    description1: { desc1: string | null; desc2: string | null }[]
    description3: string | null
  }[]
  title: string
}

export function RenderPdf({ section, title }: Props) {
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
    watermark: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.4,
      zIndex: 10,
    },
    content: {
      flexGrow: 1,
      padding: '20px',
      display: 'flex',
    },
    titleContent: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      paddingVertical: '10px',
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
      backgroundColor: '#16a34a',
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
      backgroundColor: '#D1F7DF',
    },
    medSection: {
      width: '40%',
      paddingHorizontal: '10px',
      paddingVertical: '3px',
    },
    medText: {
      fontSize: '12px',
    },
    qtdSection: {
      width: '60%',
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      borderLeftColor: 'gray',
      paddingVertical: '3px',
    },
    qdtText: {
      paddingHorizontal: '10px',
      fontSize: '12px',
    },
    descriptionSection: {
      width: '100%',
      paddingVertical: '5px',
      backgroundColor: '#C4E8D1',
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
        <Image fixed style={styles.watermark} src={watermarkImageUrl} />
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
          <View style={styles.footer}>
            <Text style={styles.draCrn}>
              DRA. TERESA CRISTINA BARBOSA DA SILVA - CRN 11 2830
            </Text>
            <Text>NUTRICIONISTA CLÍNICA</Text>
          </View>
        </View>
      </Page>
    </Document>
  )

  return (
    <PDFDownloadLink document={<MyDocument />} fileName={`teste.pdf`}>
      <button className="flex items-center justify-between gap-2 rounded bg-green-600 px-4 py-2 text-lg font-medium text-white hover:bg-opacity-95 mobile:text-xs laptop:text-base">
        <Printer size={20} />
        <p>Imprimir</p>
      </button>
    </PDFDownloadLink>
  )
}
