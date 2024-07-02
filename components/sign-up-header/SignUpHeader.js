import { View, Text, StyleSheet } from "react-native"
import BackButton from "../back-button/BackButton"

export default function SignUpHeader() {
	return (
		<View style={styles.headerWrapper}>
			<View style={styles.headerContainer}>
				<BackButton />
				<Text style={styles.titleText}>Signup</Text>
				<View style={styles.emptyView} />
			</View>
			<View style={styles.horizontalLine} />
		</View>
	)
}

const styles = StyleSheet.create({
	headerWrapper: {
		width: "100%",
		flexDirection: "column",
		gap: 10
	},
	headerContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	horizontalLine: {
		height: 1,
		width: "100%",
		backgroundColor: "lightgrey"
	},
	titleText: {
		fontSize: 20,
		fontWeight: "600"
	},
	emptyView: {
		width: 27.5
	}
})
