import { Text, TouchableOpacity, StyleSheet } from "react-native"

export default function SignUpFormNextButton() {
	return (
		<TouchableOpacity style={styles.signUpFormNextButton}>
			<Text style={styles.signUpFormNextButtonText}>Click to next</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	signUpFormNextButton: {
		height: 55,
		width: "100%",
		borderRadius: 7.5,
		backgroundColor: "#E35F21",
		alignItems: "center",
		justifyContent: "center"
	},
	signUpFormNextButtonText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "white"
	}
})
