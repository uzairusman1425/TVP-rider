import {
	View,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	StyleSheet
} from "react-native"
import PropTypes from "prop-types"
import SignUpHeader from "../sign-up-header/SignUpHeader"
import SignUpProgress from "../sign-up-progress/SignUpProgress"

export default function SignUpLayout({ children }) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView>
				<View style={styles.layoutScrollContainer}>
					<SignUpHeader />
					{children}
					<SignUpProgress />
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	layoutScrollContainer: {
		flexDirection: "column",
		gap: 15,
		paddingVertical: 50,
		marginHorizontal: 25
	}
})

SignUpLayout.propTypes = {
	children: PropTypes.node.isRequired
}
