import { View, Text, StyleSheet } from "react-native"
import { Octicons } from "@expo/vector-icons"

export default function RatingsTab() {
	return (
		<View style={styles.ratingsBox}>
			<Text style={styles.ratingsText}>Rating</Text>
			<View style={styles.ratingsContainer}>
				<Octicons name="star-fill" size={20} color="#E35F21" />
				<Text style={styles.ratingsText}>0.0</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	ratingsBox: {
		height: 45,
		width: "90%",
		borderRadius: 10,
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10
	},
	ratingsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 7.5
	},
	ratingsText: {
		fontSize: 17.5,
		fontWeight: "bold"
	}
})
