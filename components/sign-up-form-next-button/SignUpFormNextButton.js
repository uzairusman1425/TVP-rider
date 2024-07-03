import { Text, TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function SignUpFormNextButton({ handleNext }) {
	return (
		<TouchableOpacity
			style={styles.signUpFormNextButton}
			onPress={handleNext}
		>
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

SignUpFormNextButton.propTypes = {
	handleNext: PropTypes.func.isRequired
}
