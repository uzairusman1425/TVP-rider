import { View, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function MonthlyStatusChartLegend({ data }) {
	return (
		<View style={styles.monthlyStatusChartLegendContainer}>
			{data?.map((item, key) => {
				return (
					<View
						style={styles.monthlyStatusChartKeyContainer}
						key={key}
					>
						<View style={styles.keyTextContainer}>
							<View
								style={[
									styles.monthlyStatusKeyBox,
									{ backgroundColor: item?.color }
								]}
							/>
							<Text style={styles.monthlyStatusOrdersText}>
								{item?.title}
							</Text>
						</View>
						<Text style={styles.monthlyStatusOrdersText}>
							{item?.value}
						</Text>
					</View>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	monthlyStatusChartLegendContainer: {
		width: "90%",
		flexDirection: "column",
		gap: 15
	},
	monthlyStatusChartKeyContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	monthlyStatusOrdersText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "white"
	},
	keyTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	monthlyStatusKeyBox: {
		height: 20,
		width: 20,
		borderRadius: 5
	}
})

MonthlyStatusChartLegend.propTypes = {
	data: PropTypes.array.isRequired
}
