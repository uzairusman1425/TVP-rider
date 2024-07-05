import { View, Text, Image, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import SignUpFormNextButton from "../sign-up-form-next-button/SignUpFormNextButton"

export default function SignUpStep8Form() {
	const router = useRouter()

	const handleNext = () => {
		router?.navigate("/home")
	}

	return (
		<View style={styles.formContainer}>
			<Text style={styles.titleText}>Verify Your Email Address</Text>
			<Image
				source={require("../../assets/icons/email-icon.png")}
				style={styles.emailIcon}
				resizeMode="contain"
			/>
			<Text style={styles.descriptionText}>
				We just sent you an email on your email address kindly verify.
			</Text>
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
	emailIcon: {
		height: 250,
		width: 250,
		alignSelf: "center",
		marginVertical: 15
	},
	descriptionText: {
		width: 275,
		fontSize: 17.5,
		textAlign: "center",
		alignSelf: "center",
		marginVertical: 10
	}
})
