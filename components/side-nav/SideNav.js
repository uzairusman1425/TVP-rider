import { useState } from "react"
import {
	Modal,
	SafeAreaView,
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	StatusBar,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import PropTypes from "prop-types"

export default function SideNav({ openSideNav, setOpenSideNav, handleLogout }) {
	const [verifiedStatus, setVerifiedStatus] = useState(false)
	const [onlineStatus, setOnlineStatus] = useState(true)

	const router = useRouter()

	return (
		<Modal
			animationType="fade"
			transparent
			visible={openSideNav}
			onRequestClose={() => {
				setOpenSideNav(false)
			}}
		>
			<View style={styles.sideNavWrapper}>
				<SafeAreaView style={styles.sideNavContainer}>
					<View style={styles.sideNavBody}>
						<View style={styles.profileHeader}>
							<View style={styles.logoContainer}>
								<Text style={styles.logoText}>TVP</Text>
							</View>
							<TouchableOpacity style={styles.navItemContainer}>
								<Image
									source={require("../../assets/icons/profile.png")}
									style={styles.navItemIcon}
								/>
								<Text style={styles.navItemText}>Profile</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.navItemListContainer}>
							<View style={styles.navItemList}>
								<View style={styles.profileInfoContainer}>
									<View
										style={[
											styles.accountStatusContainer,
											verifiedStatus
												? styles.verifiedStatusContainer
												: styles.underVerificationStatusContainer
										]}
									>
										<Text style={styles.accountStatusText}>
											{verifiedStatus
												? "Verified"
												: "Under Verification"}
										</Text>
									</View>
									<Text style={styles.usernameText}>
										Alex
									</Text>
									<TouchableOpacity
										style={[
											styles.profileStatusContainer,
											onlineStatus
												? styles.onlineStatusContainer
												: styles.offlineStatusContainer
										]}
										onPress={() => {
											setOnlineStatus(!onlineStatus)
										}}
									>
										<View style={styles.checkBoxContainer}>
											{onlineStatus && (
												<View
													style={
														styles.checkBoxCircle
													}
												/>
											)}
										</View>
										<Text style={styles.profileStatusText}>
											{onlineStatus
												? "Online"
												: "Offline"}
										</Text>
									</TouchableOpacity>
								</View>
								<TouchableOpacity
									style={styles.navItemContainer}
								>
									<Image
										source={require("../../assets/icons/wallet.png")}
										style={styles.navItemIcon}
									/>
									<Text style={styles.navItemText}>
										Wallet
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.navItemContainer}
								>
									<Image
										source={require("../../assets/icons/vehicle-update.png")}
										style={styles.navItemIcon}
									/>
									<Text style={styles.navItemText}>
										Vehicle Update
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.navItemContainer}
								>
									<Image
										source={require("../../assets/icons/complaint.png")}
										style={styles.navItemIcon}
									/>
									<Text style={styles.navItemText}>
										File a Complaint
									</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.navItemList}>
								<TouchableOpacity
									style={styles.navItemContainer}
								>
									<Image
										source={require("../../assets/icons/terms-and-conditions.png")}
										style={styles.navItemIcon}
									/>
									<Text style={styles.navItemText}>
										Terms and Conditions
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.navItemContainer}
									onPress={handleLogout}
								>
									<Image
										source={require("../../assets/icons/logout.png")}
										style={styles.navItemIcon}
									/>
									<Text style={styles.navItemText}>
										Logout
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</SafeAreaView>
				<TouchableWithoutFeedback
					onPress={() => {
						setOpenSideNav(false)
					}}
				>
					<View style={styles.modalEmptySpace} />
				</TouchableWithoutFeedback>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	sideNavWrapper: {
		flex: 1,
		flexDirection: "row",
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	},
	modalEmptySpace: {
		width: "35%"
	},
	sideNavContainer: {
		width: "65%",
		borderBottomRightRadius: 25,
		borderTopRightRadius: 25,
		backgroundColor: "#181818",
		paddingBottom: StatusBar?.currentHeight || 0
	},
	sideNavBody: {
		flex: 1,
		flexDirection: "column",
		paddingHorizontal: 15
	},
	profileHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	logoContainer: {
		height: 65,
		width: 65,
		borderRadius: 35,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	logoText: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#E35F21"
	},
	navItemContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	navItemIcon: {
		height: 20,
		width: 20
	},
	navItemText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "white"
	},
	navItemListContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between"
	},
	navItemList: {
		flexDirection: "column",
		gap: 25,
		marginTop: 50
	},
	profileInfoContainer: {
		flexDirection: "column",
		gap: 10
	},
	accountStatusText: {
		fontSize: 12.5,
		fontWeight: "bold",
		color: "white"
	},
	accountStatusContainer: {
		height: 30,
		borderRadius: 7.5,
		alignItems: "center",
		justifyContent: "center"
	},
	underVerificationStatusContainer: {
		width: 135,
		backgroundColor: "red"
	},
	verifiedStatusContainer: {
		width: 75,
		backgroundColor: "green"
	},
	usernameText: {
		fontSize: 17.5,
		fontWeight: "bold",
		color: "white"
	},
	profileStatusContainer: {
		height: 35,
		width: 100,
		borderRadius: 7.5,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		paddingHorizontal: 10
	},
	profileStatusText: {
		fontSize: 12.5,
		fontWeight: "bold",
		color: "white"
	},
	onlineStatusContainer: {
		backgroundColor: "green"
	},
	offlineStatusContainer: {
		backgroundColor: "orange"
	},
	checkBoxContainer: {
		height: 15,
		width: 15,
		borderRadius: 10,
		borderWidth: 1.5,
		borderColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	checkBoxCircle: {
		height: 8.5,
		width: 8.5,
		borderRadius: 5,
		backgroundColor: "white"
	}
})
SideNav.propTypes = {
	openSideNav: PropTypes.bool.isRequired,
	setOpenSideNav: PropTypes.func.isRequired,
	handleLogout: PropTypes.func.isRequired
}
