import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function HalamanMateri() {
  const Pindah = useNavigation();

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
    // Kontainer Halaman
    <View style={styles.mainContainer}>
      {/* Kontainer Header Atas */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => Pindah.goBack()}>
          <Image
            source={require("../assets/arrow.png")}
            style={{
              width: 30,
              height: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Pindah.navigate("Kuis")}>
          <View
            style={{
              borderRadius: 13,
              backgroundColor: "#84B026",
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
              Mulai Kuis
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Kontainer List Item */}
      <View style={styles.listContainer}>
        {/* List Item */}
        <FlatGrid
          itemDimension={300}
          // Data List yang diTampilkan
          data={[
            {
              huruf: "Ka (Hiragana)",
              caraBaca: "( Kaban )",
              hiragana: "かばん",
              arti: "Tas",
              gmbr: require("../assets/hiragana-png/ka-h.png"),
            },
            {
              huruf: "Ki (Hiragana)",
              caraBaca: "( Ki )",
              hiragana: "き",
              arti: "Pohon",
              gmbr: require("../assets/hiragana-png/ki-h.png"),
            },
            {
              huruf: "Ku (Hiragana)",
              caraBaca: "( Kuruma )",
              hiragana: "くるま",
              arti: "Mobil",
              gmbr: require("../assets/hiragana-png/ku-h.png"),
            },
            {
              huruf: "Ke (Hiragana)",
              caraBaca: "( Kemushi )",
              hiragana: "けむし",
              arti: "Serangga (Berbulu)",
              gmbr: require("../assets/hiragana-png/ke-h.png"),
            },
            {
              huruf: "Ko (Hiragana)",
              caraBaca: "( Koma )",
              hiragana: "こま",
              arti: "Gasing",
              gmbr: require("../assets/hiragana-png/ko-h.png"),
            },
          ]}
          // Function untuk menampilkan Data List
          renderItem={({ item }) => (
            <View style={styles.itemlistStyle}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                }}
              >
                <View style={styles.kolomKiri}>
                  <Text
                    style={{
                      fontFamily: "ComicRegular",
                      fontSize: 14,
                      color: "#fff",
                      fontWeight: "600",
                      paddingBottom: 5,
                    }}
                  >
                    {item.caraBaca}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "ComicBold",
                      fontSize: 19,
                      color: "#72F2EB",
                    }}
                  >
                    {item.hiragana}
                  </Text>
                </View>
                <View style={styles.kolomTengah}>
                  <Text
                    style={{
                      fontFamily: "ComicRegular",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    {item.huruf}
                  </Text>
                  <Image
                    source={item.gmbr}
                    style={{
                      width: 170,
                      height: 130,
                      alignItems: "center",
                    }}
                  />
                </View>
                <View style={styles.kolomKanan}>
                  <Text
                    style={{
                      fontFamily: "ComicBold",
                      fontSize: 19,
                      color: "#fff",
                    }}
                  >
                    {item.arti}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#404656",
  },
  headerContainer: {
    paddingTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginBottom: 30,
  },
  listContainer: {
    flex: 5,
    alignItems: "center",
    marginHorizontal: 15,
  },
  itemlistStyle: {
    flex: 1,
    borderRadius: 13,
    borderColor: "#fff",
    borderWidth: 1,
    paddingTop: 5,
    height: 190,
  },
  kolomKiri: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  kolomTengah: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 4,
  },
  kolomKanan: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
