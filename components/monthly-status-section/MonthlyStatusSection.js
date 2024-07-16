import { View, Text, StyleSheet } from "react-native"
import MonthlyStatusChartLegend from "../monthly-status-chart-legend/MonthlyStatusChartLegend"
import MonthTabs from "../month-tabs/MonthTabs"
import MonthlyStatusChart from "../monthly-status-chart/MonthlyStatusChart"

export default function MonthlyStatusSection() {
	const data = [
		{ value: 35, color: "#ffffff", title: "Completed orders" },
		{ value: 55, color: "#E35F21", title: "Incomplete orders" }
	]

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]

	return (
		<View style={styles.monthlyStatusBox}>
			<Text style={styles.monthlyStatusTitleText}>Monthly Status</Text>
			<MonthlyStatusChartLegend data={data} />
			<MonthTabs months={months} />
			<MonthlyStatusChart data={data} />
		</View>
	)
}

const styles = StyleSheet.create({
	monthlyStatusBox: {
		flex: 1,
		width: "95%",
		backgroundColor: "black",
		marginBottom: 15,
		borderRadius: 15,
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	monthlyStatusTitleText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
		textDecorationLine: "underline",
		alignSelf: "center"
	}
})
