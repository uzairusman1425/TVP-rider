import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function OrderStatsCard({ title, count }) {
	return (
		<View style={styles.statisticsCard}>
			<Text style={styles.statNameText}>{title}</Text>
			<Text style={styles.statCountText}>{count}</Text>
			<TouchableOpacity>
				<Text style={styles.viewDetailsText}>View Details</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	statisticsCard: {
		height: 100,
		width: "30%",
		backgroundColor: "white",
		borderRadius: 10,
		elevation: 5,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	statNameText: {
		fontSize: 8.5,
		fontWeight: "900",
		color: "#E35F21"
	},
	statCountText: {
		fontSize: 30,
		fontWeight: "800"
	},
	viewDetailsText: {
		fontSize: 8.5,
		fontWeight: "800",
		textDecorationLine: "underline"
	}
})

OrderStatsCard.propTypes = {
	title: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired
}
