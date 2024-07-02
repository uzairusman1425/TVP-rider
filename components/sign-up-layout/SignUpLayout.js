import { View, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import SignUpHeader from "../sign-up-header/SignUpHeader"
import SignUpFooter from "../sign-up-footer/SignUpFooter"

export default function SignUpLayout({ children }) {
	return (
		<View style={styles.layoutContainer}>
			<SignUpHeader />
			{children}
			<SignUpFooter />
		</View>
	)
}

const styles = StyleSheet.create({
	layoutContainer: {
		flexDirection: "column",
		gap: 15,
		paddingVertical: 50,
		marginHorizontal: 25
	}
})

SignUpLayout.propTypes = {
	children: PropTypes.node.isRequired
}
