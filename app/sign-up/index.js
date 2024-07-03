import { useState } from "react"
import { View, StyleSheet } from "react-native"
import SignUpStep1Form from "../../components/sign-up-step-1-form/SignUpStep1Form"
import SignUpProgress from "../../components/sign-up-progress/SignUpProgress"

export default function Page() {
	const [currentStep, setCurrentStep] = useState(1)
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [personalEmail, setPersonalEmail] = useState("")
	const [personalPhoneNumber, setPersonalPhoneNumber] = useState("")
	const [password, setPassword] = useState("")
	const [gender, setGender] = useState("")
	const [checked, setChecked] = useState(false)

	return (
		<View style={styles.container}>
			{currentStep === 1 ? (
				<SignUpStep1Form
					firstName={firstName}
					setFirstName={setFirstName}
					lastName={lastName}
					setLastName={setLastName}
					personalEmail={personalEmail}
					setPersonalEmail={setPersonalEmail}
					personalPhoneNumber={personalPhoneNumber}
					setPersonalPhoneNumber={setPersonalPhoneNumber}
					password={password}
					setPassword={setPassword}
					gender={gender}
					setGender={setGender}
					checked={checked}
					setChecked={setChecked}
					setCurrentStep={setCurrentStep}
				/>
			) : (
				<View></View>
			)}
			<SignUpProgress currentStep={currentStep} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "column",
		gap: 10
	}
})
