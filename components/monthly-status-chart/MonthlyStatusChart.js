import { View, StyleSheet } from "react-native"
import { PieChart } from "react-native-gifted-charts"
import PropTypes from "prop-types"

export default function MonthlyStatusChart({ data }) {
	return (
		<View style={styles.monthlyStatusChartWrapper}>
			<PieChart
				donut
				backgroundColor="black"
				radius={100}
				innerRadius={75}
				data={data}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	monthlyStatusChartWrapper: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	}
})

MonthlyStatusChart.propTypes = {
	data: PropTypes.array.isRequired
}
