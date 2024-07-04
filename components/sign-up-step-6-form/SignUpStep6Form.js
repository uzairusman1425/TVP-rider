import { useState } from "react"
import { View, Text, TextInput, Image, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import SignUpFormNextButton from "../sign-up-form-next-button/SignUpFormNextButton"

export default function SignUpStep6Form({ setCurrentStep }) {
	const [birthDate, setBirthDate] = useState("")

	const handleNext = () => {
		setCurrentStep(7)
	}

	return (
		<View style={styles.formContainer}>
			<Text style={styles.titleText}>
				Tell us About your Business Type
			</Text>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Upload Your ID Card Picture
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<View style={styles.imageInputField}>
					<Image
						source={require("../../assets/icons/upload-cloud.png")}
						style={styles.uploadIcon}
						resizeMode="contain"
					/>
				</View>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Upload Your Face Picture
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<View style={styles.imageInputField}>
					<Image
						source={require("../../assets/icons/upload-cloud.png")}
						style={styles.uploadIcon}
						resizeMode="contain"
					/>
				</View>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Enter Your Birth Date
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={birthDate}
					onChangeText={setBirthDate}
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
		gap: 10,
		zIndex: 10
	},
	inputFieldContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 7.5,
		zIndex: 10
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
	},
	imageInputField: {
		height: 115,
		width: "100%",
		borderRadius: 15,
		borderWidth: 0.5,
		borderColor: "lightgrey",
		backgroundColor: "white",
		elevation: 5,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		alignItems: "center",
		justifyContent: "center"
	},
	uploadIcon: {
		height: 50,
		width: 50
	}
})

SignUpStep6Form.propTypes = {
	setCurrentStep: PropTypes.func.isRequired
}
