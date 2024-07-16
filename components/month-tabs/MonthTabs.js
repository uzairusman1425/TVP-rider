import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function MonthTabs({ months }) {
	return (
		<View style={styles.monthTabsContainer}>
			{months?.map((item, key) => {
				return (
					<TouchableOpacity key={key}>
						<Text style={styles.monthTabText}>{item}</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	monthTabsContainer: {
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	monthTabText: {
		fontSize: 10,
		fontWeight: "800",
		color: "white",
		textDecorationLine: "underline"
	}
})

MonthTabs.propTypes = {
	months: PropTypes.array.isRequired
}
