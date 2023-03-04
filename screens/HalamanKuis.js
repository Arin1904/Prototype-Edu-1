import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { useFonts } from "expo-font";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import React from "react";
import KuisData from "../components/KuisData";

export default function HalamanKuis() {
  const Pindah = useNavigation();

  // mengambil data kuis
  const allData = KuisData;

  // Menghitung pertanyaan yang telah dijawab
  const [dataIndex, setDataIndex] = useState(0);

  // Menambahkan gambar check jika pilihan di klik
  const [selected, setSelected] = useState(null);

  // Menghitung score
  const [skor, setSkor] = useState(0);

  // Menampilkan popup modal Skor
  const [ShowModal, setShowModal] = useState(null);

  // Mengambil Custom Font dari folder assets
  const [fontLoaded] = useFonts({
    FiraSans: require("../assets/fonts/FiraSans-Regular.ttf"),
    ComicRegular: require("../assets/fonts/ComicNeue-Regular.ttf"),
    ComicBold: require("../assets/fonts/ComicNeue-Bold.ttf"),
  });
  if (!fontLoaded) {
    return null;
  }

  // Memeriksa Soal, jika = 10 maka ke halaman selanjutnya
  const Validasi = () => {
    if (dataIndex == allData.length - 1) {
      setShowModal(true);
    } else {
      setDataIndex(dataIndex + 1);
    }
  };

  // Cek Jawaban
  const CekJawaban = (cek) => {
    let jawabanBenar = allData[dataIndex]["jawab"];
    setSelected(cek);
    if (cek == jawabanBenar) {
      setSkor(skor + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Pindah.goBack()}>
          <View
            style={{
              backgroundColor: "#84B026",
              borderRadius: 13,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "FiraSans",
                paddingHorizontal: 18,
                paddingVertical: 10,
              }}
            >
              Akhiri Kuis
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.kolomAtas}>
        {/* Menampilkan Jumlah Pertanyaan */}
        <Text
          style={{
            color: "#fff",
            fontFamily: "FiraSans",
            paddingBottom: 10,
            fontSize: 13,
          }}
        >
          Soal ke {dataIndex + 1} dari {allData.length}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontFamily: "ComicRegular",
            paddingBottom: 15,
            fontSize: 20,
          }}
        >
          Bagaimana cara membaca huruf berikut ?
        </Text>
        <Text
          style={{
            color: "#72F2EB",
            fontFamily: "ComicBold",
            fontSize: 40,
          }}
        >
          {allData[dataIndex]?.pertanyaan}
        </Text>
      </View>
      <View style={styles.kolomPilihan}>
        {allData[dataIndex]?.pilihan.map((option) => (
          <TouchableOpacity key={option} onPress={() => CekJawaban(option)}>
            <View
              style={{
                borderColor: "#fff",
                borderRadius: 13,
                borderWidth: 0.3,
                flexDirection: "row",
                justifyContent: "center",
                // alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "FiraSans",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 24,
                  paddingVertical: 5,
                }}
              >
                {option}
                {option == selected ? (
                  <View
                    style={{
                      justifyContent: "flex-end",
                    }}
                  >
                    <Image
                      style={{ width: 17, height: 17, marginLeft: 7 }}
                      source={require("../assets/check.png")}
                    />
                  </View>
                ) : null}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.kolomTombol}>
        <TouchableOpacity onPress={() => Validasi()}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: "#8AA6A3",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 120,
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "FiraSans",
                fontSize: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Selanjutnya
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal Popup Hasil */}
      <Modal animationType="slide" transparent={true} visible={ShowModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalStyle}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "ComicBold",
                marginBottom: 15,
              }}
            >
              {skor > allData.length / 2 ? "Selamat!" : "Kamu Gagal"}
            </Text>
            <Text
              style={{
                marginBottom: 25,
                fontFamily: "FiraSans",
                fontSize: 18,
                fontWeight: "200",
              }}
            >
              Kamu Menjawab {skor} dari {allData.length}
            </Text>
            <TouchableOpacity
              style={styles.tombolModal}
              onPress={() => {
                Pindah.dispatch(StackActions.popToTop());
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "FiraSans",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Kembali ke Halaman Utama
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404656",
  },
  header: {
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 25,
    marginBottom: 35,
  },
  kolomAtas: {
    flex: 2,
    marginHorizontal: 40,
    flexDirection: "column",
  },
  kolomPilihan: {
    flex: 5,
    flexDirection: "column",
    marginHorizontal: 25,
  },
  kolomTombol: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#404656",
    alignItems: "center",
    justifyContent: "center",
  },
  modalStyle: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  tombolModal: {
    backgroundColor: "#84B026",
    padding: 20,
    width: "100%",
    borderRadius: 13,
  },
});
