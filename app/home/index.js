import { useState } from "react"
import {
	View,
	TouchableOpacity,
	Text,
	StatusBar,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import SideNav from "../../components/side-nav/SideNav"
import HomeScreenHeader from "../../components/home-screen-header/HomeScreenHeader"
import DailyStatsSection from "../../components/daily-stats-section/DailyStatsSection"
import MonthlyStatusSection from "../../components/monthly-status-section/MonthlyStatusSection"

export default function Page() {
	const router = useRouter()

	const [openSideNav, setOpenSideNav] = useState(false)

	const handleLogout = () => {
		setOpenSideNav(false)
		router?.navigate("/")
	}

	return (
		<View style={styles.container}>
			<SideNav
				openSideNav={openSideNav}
				setOpenSideNav={setOpenSideNav}
				handleLogout={handleLogout}
			/>
			<HomeScreenHeader setOpenSideNav={setOpenSideNav} />
			<View style={styles.bodyContainer}>
				<TouchableOpacity>
					<Text style={styles.completeVerificationText}>
						Complete your verification
					</Text>
				</TouchableOpacity>
				<DailyStatsSection />
				<MonthlyStatusSection />
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
		backgroundColor: "white",
		marginTop: StatusBar?.currentHeight || 0
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
	}
})
