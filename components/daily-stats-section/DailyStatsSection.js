import { View, Text, StyleSheet } from "react-native"
import OrderStatsCard from "../order-stats-card/OrderStatsCard"

export default function DailyStatsSection() {
	return (
		<View style={styles.statisticsBox}>
			<Text style={styles.statisticsTitleText}>Daily Stats</Text>
			<View style={styles.statisticsCardsContainer}>
				<OrderStatsCard title="New Orders" count={0} />
				<OrderStatsCard title="In Progress" count={0} />
				<OrderStatsCard title="Completed Orders" count={0} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	statisticsBox: {
		height: 165,
		width: "95%",
		borderRadius: 15,
		borderColor: "#E35F21",
		borderWidth: 2,
		padding: 10,
		flexDirection: "column",
		gap: 10
	},
	statisticsTitleText: {
		fontSize: 15,
		fontWeight: "800",
		color: "#E35F21",
		textDecorationLine: "underline"
	},
	statisticsCardsContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	}
})
