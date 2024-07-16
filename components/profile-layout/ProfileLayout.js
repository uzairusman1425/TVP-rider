import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import ProfileHeader from "../profile-header/ProfileHeader"

export default function ProfileLayout({ children }) {
	return (
		<View style={styles.layout}>
			<SafeAreaView style={styles.layoutBodyContainer}>
				<ProfileHeader />
				{children}
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	layout: {
		backgroundColor: "white",
		flex: 1
	},
	layoutBodyContainer: {
		flexDirection: "column",
		gap: 15,
		paddingVertical: StatusBar?.currentHeight || 0,
		marginHorizontal: 25
	}
})

ProfileLayout.propTypes = {
	children: PropTypes.node.isRequired
}
