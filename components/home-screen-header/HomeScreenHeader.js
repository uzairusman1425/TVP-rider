import {
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import PropTypes from "prop-types"
import RatingsTab from "../ratings-tab/RatingsTab"

export default function HomeScreenHeader({ setOpenSideNav }) {
	return (
		<LinearGradient
			style={styles.headerBackgroundGradient}
			colors={["#FE5C25", "#000000"]}
		>
			<SafeAreaView style={styles.headerContainer}>
				<View style={styles.headerOptionsContainer}>
					<TouchableOpacity
						onPress={() => {
							setOpenSideNav(true)
						}}
					>
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
				<RatingsTab />
			</SafeAreaView>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
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
	}
})

HomeScreenHeader.propTypes = {
	setOpenSideNav: PropTypes.func.isRequired
}
