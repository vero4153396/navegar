import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>MENÚ</Text>
      <Link href='/peliculas'>IR A PELICULAS</Link>
      <Link href='/settings'>IR A SETTINGS</Link>
    </View>
  );
}
