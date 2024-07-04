import { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import SignUpFormNextButton from "../sign-up-form-next-button/SignUpFormNextButton"

export default function SignUpStep4Form({ setCurrentStep }) {
	const [bankName, setBankName] = useState("")
	const [bankAccountHolderName, setBankAccountHolderName] = useState("")
	const [bankAccountNumber, setBankAccountNumber] = useState("")
	const [billingAddress, setBillingAddress] = useState("")

	const handleNext = () => {
		setCurrentStep(5)
	}

	return (
		<View style={styles.formContainer}>
			<Text style={styles.titleText}>
				Add your bank details to receive Payments
			</Text>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>Bank Name</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={bankName}
					onChangeText={setBankName}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Bank Account Holder Name
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={bankAccountHolderName}
					onChangeText={setBankAccountHolderName}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Bank Account Number
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={bankAccountNumber}
					onChangeText={setBankAccountNumber}
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Billing Address
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					value={billingAddress}
					onChangeText={setBillingAddress}
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

SignUpStep4Form.propTypes = {
	setCurrentStep: PropTypes.func.isRequired
}
