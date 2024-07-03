import { View, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function SignUpProgress({ currentStep }) {
	return (
		<View style={styles.signUpStepIndicator}>
			<View style={styles.signUpStepTextContainer}>
				<Text
					style={[styles.signUpStepText, styles.signUpStepTextOrange]}
				>
					Step {currentStep}
				</Text>
				<Text style={styles.signUpStepText}>Out of</Text>
				<Text
					style={[styles.signUpStepText, styles.signUpStepTextOrange]}
				>
					Step 8
				</Text>
			</View>
			<View style={styles.signUpStepProgressBar}>
				<View
					style={[
						styles.signUpStepProgress,
						{
							width: 150 * (currentStep / 8)
						}
					]}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	signUpStepIndicator: {
		flexDirection: "column",
		gap: 5,
		alignItems: "center"
	},
	signUpStepTextContainer: {
		flexDirection: "row",
		gap: 5,
		alignItems: "center"
	},
	signUpStepText: {
		fontWeight: "500"
	},
	signUpStepTextOrange: {
		color: "#E35F21"
	},
	signUpStepProgressBar: {
		height: 5,
		width: 150,
		borderRadius: 2.5,
		backgroundColor: "lightgrey"
	},
	signUpStepProgress: {
		height: "100%",
		borderRadius: 2.5,
		backgroundColor: "#E35F21"
	}
})

SignUpProgress.propTypes = {
	currentStep: PropTypes.number.isRequired
}
