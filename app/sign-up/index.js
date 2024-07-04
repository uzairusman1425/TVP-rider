import { useState } from "react"
import { View, StyleSheet } from "react-native"
import SignUpStep1Form from "../../components/sign-up-step-1-form/SignUpStep1Form"
import SignUpStep2Form from "../../components/sign-up-step-2-form/SignUpStep2Form"
import SignUpProgress from "../../components/sign-up-progress/SignUpProgress"

export default function Page() {
	const [currentStep, setCurrentStep] = useState(1)

	return (
		<View style={styles.container}>
			{currentStep === 1 ? (
				<SignUpStep1Form setCurrentStep={setCurrentStep} />
			) : currentStep === 2 ? (
				<SignUpStep2Form setCurrentStep={setCurrentStep} />
			) : (
				<View />
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
