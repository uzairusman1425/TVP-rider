import { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import SignUpFormNextButton from "../sign-up-form-next-button/SignUpFormNextButton"

export default function SignUpStep3Form({ setCurrentStep }) {
	const [homeAddress, setHomeAddress] = useState("")
	const [state, setState] = useState("")
	const [city, setCity] = useState("")
	const [area, setArea] = useState("")
	const [additionalDetails, setAdditionalDetails] = useState("")

	const handleNext = () => {
		setCurrentStep(4)
	}

	return (
		<View style={styles.formContainer}>
			<Text style={styles.titleText}>Add your Location</Text>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>Home Address</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={homeAddress}
					onChangeText={setHomeAddress}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>State</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={state}
					onChangeText={setState}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>City</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={city}
					onChangeText={setCity}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>Area</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={area}
					onChangeText={setArea}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Additional Details
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={additionalDetails}
					onChangeText={setAdditionalDetails}
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

SignUpStep3Form.propTypes = {
	setCurrentStep: PropTypes.func.isRequired
}
