import { useState } from "react"
import { View, StyleSheet } from "react-native"
import SignUpStep1Form from "../../components/sign-up-step-1-form/SignUpStep1Form"
import SignUpStep2Form from "../../components/sign-up-step-2-form/SignUpStep2Form"
import SignUpStep3Form from "../../components/sign-up-step-3-form/SignUpStep3Form"
import SignUpStep4Form from "../../components/sign-up-step-4-form/SignUpStep4Form"
import SignUpStep5Form from "../../components/sign-up-step-5-form/SignUpStep5Form"
import SignUpStep6Form from "../../components/sign-up-step-6-form/SignUpStep6Form"
import SignUpStep7Form from "../../components/sign-up-step-7-form/SignUpStep7Form"
import SignUpStep8Form from "../../components/sign-up-step-8-form/SignUpStep8Form"
import SignUpProgress from "../../components/sign-up-progress/SignUpProgress"

export default function Page() {
	const [currentStep, setCurrentStep] = useState(1)

	return (
		<View style={styles.container}>
			{currentStep === 1 ? (
				<SignUpStep1Form setCurrentStep={setCurrentStep} />
			) : currentStep === 2 ? (
				<SignUpStep2Form setCurrentStep={setCurrentStep} />
			) : currentStep === 3 ? (
				<SignUpStep3Form setCurrentStep={setCurrentStep} />
			) : currentStep === 4 ? (
				<SignUpStep4Form setCurrentStep={setCurrentStep} />
			) : currentStep === 5 ? (
				<SignUpStep5Form setCurrentStep={setCurrentStep} />
			) : currentStep === 6 ? (
				<SignUpStep6Form setCurrentStep={setCurrentStep} />
			) : currentStep === 7 ? (
				<SignUpStep7Form setCurrentStep={setCurrentStep} />
			) : (
				currentStep === 8 && <SignUpStep8Form />
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
