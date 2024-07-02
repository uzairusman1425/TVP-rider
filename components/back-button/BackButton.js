import { TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { Feather } from "@expo/vector-icons"

export default function BackButton() {
	const router = useRouter()

	return (
		<TouchableOpacity
			style={styles.backButton}
			onPress={() => {
				router?.back()
			}}
		>
			<Feather name="arrow-left" size={20} color="white" />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	backButton: {
		height: 27.5,
		width: 27.5,
		borderRadius: 15,
		backgroundColor: "#E35F21",
		alignItems: "center",
		justifyContent: "center"
	}
})
