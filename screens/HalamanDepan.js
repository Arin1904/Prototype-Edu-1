import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import HiraganaListDepan from "../components/HiraganaListDepan";
import KatakanaListDepan from "../components/KatakanaListDepan";

export default function HalamanDepan() {
  // Mengambil ukuran layar ponsel
  const initialLayout = { width: Dimensions.get("window").width };

  // Mengambil data Components
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <HiraganaListDepan />;
      case "second":
        return <KatakanaListDepan />;
      default:
        return null;
    }
  };

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
