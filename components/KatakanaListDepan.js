import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { useFonts } from "expo-font";
import React from "react";

export default function KatakanaListDepan() {
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
            bagian: "Katakana 1",
            deskrip:
              "Pengenalan A-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/a-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 2",
            deskrip:
              "Pengenalan K-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/ka-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 3",
            deskrip:
              "Pengenalan S-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/sa-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 4",
            deskrip:
              "Pengenalan T-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/ta-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 5",
            deskrip:
              "Pengenalan N-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/na-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 6",
            deskrip:
              "Pengenalan H-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/ha-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 7",
            deskrip:
              "Pengenalan M-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/ma-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 8",
            deskrip:
              "Pengenalan Y-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/ya-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 9",
            deskrip:
              "Pengenalan R-Line Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/ra-k.png"),
          },
          {
            course: "Pengenalan Huruf",
            bagian: "Katakana 10",
            deskrip:
              "Pengenalan W-Line dan N Katakana beserta Penggunaannya pada Kata Benda",
            gambar: require("../assets/katakana-png/wa-k.png"),
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
