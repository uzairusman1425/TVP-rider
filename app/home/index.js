import {
	View,
	SafeAreaView,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Entypo, MaterialCommunityIcons, Octicons } from "@expo/vector-icons"
import { PieChart } from "react-native-gifted-charts"

export default function Page() {
	const data = [
		{ value: 35, color: "#ffffff", title: "Completed orders" },
		{ value: 55, color: "#E35F21", title: "Incomplete orders" }
	]

	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.headerBackgroundGradient}
				colors={["#FE5C25", "#000000"]}
			>
				<SafeAreaView style={styles.headerContainer}>
					<View style={styles.headerOptionsContainer}>
						<TouchableOpacity>
							<Entypo name="menu" size={30} color="white" />
						</TouchableOpacity>
						<Image
							source={require("../../assets/logo/tvp-logo-white.png")}
							style={styles.logoImage}
							resizeMode="contain"
						/>
						<TouchableOpacity>
							<MaterialCommunityIcons
								name="bell"
								size={30}
								color="white"
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.ratingsBox}>
						<Text style={styles.ratingsText}>Rating</Text>
						<View style={styles.ratingsContainer}>
							<Octicons
								name="star-fill"
								size={20}
								color="#E35F21"
							/>
							<Text style={styles.ratingsText}>0.0</Text>
						</View>
					</View>
				</SafeAreaView>
			</LinearGradient>
			<View style={styles.bodyContainer}>
				<TouchableOpacity>
					<Text style={styles.completeVerificationText}>
						Complete your verification
					</Text>
				</TouchableOpacity>
				<View style={styles.statisticsBox}>
					<Text style={styles.statisticsTitleText}>Daily Stats</Text>
					<View style={styles.statisticsCardsContainer}>
						<View style={styles.statisticsCard}>
							<Text style={styles.statNameText}>New Orders</Text>
							<Text style={styles.statCountText}>0</Text>
							<TouchableOpacity>
								<Text style={styles.viewDetailsText}>
									View Details
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.statisticsCard}>
							<Text style={styles.statNameText}>In Progress</Text>
							<Text style={styles.statCountText}>0</Text>
							<TouchableOpacity>
								<Text style={styles.viewDetailsText}>
									View Details
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.statisticsCard}>
							<Text style={styles.statNameText}>
								Completed Orders
							</Text>
							<Text style={styles.statCountText}>0</Text>
							<TouchableOpacity>
								<Text style={styles.viewDetailsText}>
									View Details
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.monthlyStatusBox}>
					<Text style={styles.monthlyStatusTitleText}>
						Monthly Status
					</Text>
					<View style={styles.monthlyStatusChartLegendContainer}>
						{data?.map((item, key) => {
							return (
								<View
									style={
										styles.monthlyStatusChartKeyContainer
									}
									key={key}
								>
									<View style={styles.keyTextContainer}>
										<View
											style={[
												styles.monthlyStatusKeyBox,
												{ backgroundColor: item?.color }
											]}
										/>
										<Text
											style={
												styles.monthlyStatusOrdersText
											}
										>
											{item?.title}
										</Text>
									</View>
									<Text
										style={styles.monthlyStatusOrdersText}
									>
										{item?.value}
									</Text>
								</View>
							)
						})}
					</View>
					<View style={styles.monthTabsContainer}>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Jan</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Feb</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Mar</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Apr</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>May</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Jun</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Jul</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Aug</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Sep</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Oct</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Nov</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.monthTabText}>Dec</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.monthlyStatusChartWrapper}>
						<PieChart
							donut
							backgroundColor="black"
							radius={100}
							innerRadius={75}
							data={data}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		gap: 10,
		backgroundColor: "white"
	},
	headerBackgroundGradient: {
		width: "100%",
		borderRadius: 25
	},
	headerContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 10,
		marginVertical: 15
	},
	headerOptionsContainer: {
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	logoImage: {
		height: 50,
		width: 125
	},
	ratingsBox: {
		height: 45,
		width: "90%",
		borderRadius: 10,
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10
	},
	ratingsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 7.5
	},
	ratingsText: {
		fontSize: 17.5,
		fontWeight: "bold"
	},
	bodyContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		gap: 15
	},
	completeVerificationText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "red",
		textDecorationLine: "underline"
	},
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
	},
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
	},
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
	},
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
	},
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
	},
	monthlyStatusChartWrapper: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	}
})
