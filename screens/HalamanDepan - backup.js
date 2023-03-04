import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";
import { useFonts } from "expo-font";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

// Variable untuk menggunakan navigasi
const Pindah = useNavigation();

// Tab Pertama
const FirstRoute = () => (
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

// Tab Kedua
const SecondRoute = () => (
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

// Mengambil ukuran layar ponsel
const initialLayout = { width: Dimensions.get("window").width };

// Mengganti Nama const Tab
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function HalamanDepan() {
  // Menggunakan State
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Hiragana" },
    { key: "second", title: "Katakana" },
  ]);

  // Mengambil Custom Font dari folder assets
  const [fontLoaded] = useFonts({
    FiraSans: require("../assets/fonts/FiraSans-Regular.ttf"),
    ComicRegular: require("../assets/fonts/ComicNeue-Regular.ttf"),
    ComicBold: require("../assets/fonts/ComicNeue-Bold.ttf"),
  });
  if (!fontLoaded) {
    return null;
  }

  return (
    // Kontainer Utama
    <View style={styles.container}>
      {/* Kontainer gambar background */}
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/bg.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          {/* Kolom Atas dari Halaman */}
          <View style={styles.kolomAtas}>
            <Text
              style={{
                color: "#fff",
                paddingHorizontal: 20,
                alignItems: "center",
                fontFamily: "FiraSans",
                fontSize: 30,
              }}
            >
              Selamat Datang
            </Text>
            <Text
              style={{
                color: "#fff",
                paddingLeft: 20,
                paddingRight: 90,
                alignItems: "center",
                fontFamily: "FiraSans",
                fontSize: 14,
              }}
            >
              Ini adalah aplikasi edukasi berbahasa Jepang. Dengan aplikasi ini,
              kamu dapat melatih ingatanmu atau mencoba membiasakan diri membaca
              dengan Hiragana dan Katakana.
            </Text>
          </View>
        </ImageBackground>
      </View>

      {/* Kolom Bawah Halaman */}
      <View style={styles.kolomBawah}>
        <TabView
          navigationState={{ index, routes }}
          renderTabBar={(props) => (
            // Tab Halaman Utama
            <TabBar
              {...props}
              renderLabel={({ route, color }) => (
                <Text
                  style={{
                    color: "#BDFF23",
                    fontFamily: "ComicBold",
                    fontSize: 18,
                  }}
                >
                  {route.title}
                </Text>
              )}
              style={{ backgroundColor: "#404656" }}
            />
          )}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404656",
  },
  kolomAtas: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 30,
  },
  kolomBawah: {
    flex: 2,
  },
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
  TabContainer: {
    color: "#404656",
  },
});
