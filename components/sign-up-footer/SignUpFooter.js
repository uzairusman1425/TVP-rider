import { View, StyleSheet } from "react-native"
import SignUpFormNextButton from "../sign-up-form-next-button/SignUpFormNextButton"
import SignUpProgress from "../sign-up-progress/SignUpProgress"

export default function SignUpFooter() {
	return (
		<View style={styles.footerContainer}>
			<SignUpFormNextButton />
			<SignUpProgress />
		</View>
	)
}

const styles = StyleSheet.create({
	footerContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 15,
		alignItems: "center"
	}
})
