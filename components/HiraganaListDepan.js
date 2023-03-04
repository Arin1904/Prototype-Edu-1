import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { useFonts } from "expo-font";
import React from "react";

export default function HiraganaListDepan() {
  const Pindah = useNavigation();

  const [fontLoaded] = useFonts({
    FiraSans: require("../assets/fonts/FiraSans-Regular.ttf"),
    ComicRegular: require("../assets/fonts/ComicNeue-Regular.ttf"),
    ComicBold: require("../assets/fonts/ComicNeue-Bold.ttf"),
  });
  if (!fontLoaded) {
    return null;
  }

  return (
    // Kontainer List
    <View style={styles.listContainer}>
      <FlatGrid
        itemDimension={300}
        // Data List yang diTampilkan
        data={[
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 1",
            deskrip:
              "Pengenalan A-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/a-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 2",
            deskrip:
              "Pengenalan K-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/ka-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 3",
            deskrip:
              "Pengenalan S-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/sa-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 4",
            deskrip:
              "Pengenalan T-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/ta-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 5",
            deskrip:
              "Pengenalan N-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/na-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 6",
            deskrip:
              "Pengenalan H-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/ha-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 7",
            deskrip:
              "Pengenalan M-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/ma-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 8",
            deskrip:
              "Pengenalan Y-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/ya-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 9",
            deskrip:
              "Pengenalan R-Line Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/ra-h.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Hiragana 10",
            deskrip:
              "Pengenalan W-Line dan N Hiragana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/hiragana-png/wa-h.png"),
          },
        ]}
        // Function untuk menampilkan Data List
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemListStyle}
            onPress={() => Pindah.navigate("Materi")}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={styles.itemKolomKiri}>
                <Text
                  style={{
                    fontFamily: "ComicRegular",
                    color: "#fff",
                    paddingBottom: 18,
                    fontSize: 14,
                  }}
                >
                  {item.course}
                </Text>
                <Text
                  style={{
                    fontFamily: "ComicBold",
                    color: "#fff",
                    fontSize: 24,
                    paddingBottom: 9,
                    paddingLeft: 17,
                  }}
                >
                  {item.bagian}
                </Text>
                <Text
                  style={{
                    fontFamily: "ComicRegular",
                    color: "#fff",
                    paddingLeft: 17,
                    fontSize: 13,
                  }}
                >
                  {item.deskrip}
                </Text>
              </View>
              <View style={styles.itemKolomKanan}>
                <Image
                  source={item.gambar}
                  style={{ width: 110, height: 90, alignItems: "flex-end" }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
  },
  itemListStyle: {
    paddingTop: 5,
    height: 120,
    borderRadius: 8,
    borderColor: "#fff",
    borderWidth: 1,
  },
  itemKolomKiri: {
    flex: 2,
    flexDirection: "column",
    paddingBottom: 30,
    paddingLeft: 20,
  },
  itemKolomKanan: {
    flex: 1,
    paddingBottom: 5,
    paddingRight: 5,
    alignItems: "flex-end",
  },
});
