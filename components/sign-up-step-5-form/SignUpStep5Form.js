import { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import SignUpFormNextButton from "../sign-up-form-next-button/SignUpFormNextButton"

export default function SignUpStep5Form({ setCurrentStep }) {
	const [pointOfContactName, setPointOfContactName] = useState("")
	const [contactNumber, setContactNumber] = useState("")
	const [relationship, setRelationship] = useState("")

	const handleNext = () => {
		setCurrentStep(6)
	}

	return (
		<View style={styles.formContainer}>
			<Text style={styles.titleText}>Emergency Backup Details</Text>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Point of Contact Name
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={pointOfContactName}
					onChangeText={setPointOfContactName}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Contact Number
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={contactNumber}
					onChangeText={setContactNumber}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>Relationship</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={relationship}
					onChangeText={setRelationship}
				/>
			</View>
			<SignUpFormNextButton handleNext={handleNext} />
		</View>
	)
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 20,
		fontWeight: "bold"
	},
	formContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 10
	},
	inputFieldContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 7.5
	},
	inputFieldTitleContainer: {
		flexDirection: "row",
		gap: 2
	},
	inputFieldTitleText: {
		fontSize: 15
	},
	requiredMarker: {
		fontSize: 15,
		color: "#E35F21"
	},
	inputField: {
		height: 45,
		width: "100%",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 12.5,
		fontSize: 17.5
	}
})

SignUpStep5Form.propTypes = {
	setCurrentStep: PropTypes.func.isRequired
}
