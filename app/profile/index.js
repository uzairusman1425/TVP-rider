import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons"

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.profileImageContainer}>
				<Image
					source={require("../../assets/images/profile.png")}
					style={styles.profileImage}
				/>
			</View>
			<Text style={styles.usernameText}>Alex</Text>
			<Text style={styles.emailText}>abc@hotmail.com</Text>
			<View style={styles.profileOptionsListContainer}>
				<View style={styles.listItemWrapper}>
					<View style={styles.listItemContainer}>
						<FontAwesome name="user" size={24} color="#E35F21" />
						<View style={styles.listItemDetailsContainer}>
							<Text style={styles.listItemTitle}>
								Profile Information
							</Text>
							<Text style={styles.listItemDetails}>
								Change your account information
							</Text>
						</View>
					</View>
					<TouchableOpacity onPress={() => {}}>
						<AntDesign name="right" size={20} color="#E35F21" />
					</TouchableOpacity>
				</View>
				<View style={styles.listItemWrapper}>
					<View style={styles.listItemContainer}>
						<FontAwesome5 name="lock" size={24} color="#E35F21" />
						<View style={styles.listItemDetailsContainer}>
							<Text style={styles.listItemTitle}>
								Change Password
							</Text>
							<Text style={styles.listItemDetails}>
								Change your password
							</Text>
						</View>
					</View>
					<TouchableOpacity onPress={() => {}}>
						<AntDesign name="right" size={20} color="#E35F21" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 10
	},
	profileImageContainer: {
		height: 115,
		width: 115,
		borderRadius: 55,
		borderWidth: 1,
		borderStyle: "dashed",
		alignItems: "center",
		justifyContent: "center"
	},
	profileImage: {
		height: 100,
		width: 100,
		borderRadius: 50,
		resizeMode: "cover"
	},
	profileOptionsListContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 25,
		marginVertical: 20
	},
	usernameText: {
		fontSize: 17.5
	},
	emailText: {
		fontSize: 15,
		color: "gray"
	},
	listItemWrapper: {
		width: "85%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	listItemContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15
	},
	listItemDetailsContainer: {
		flexDirection: "column",
		gap: 5
	},
	listItemTitle: {
		fontSize: 12.5,
		fontWeight: "700"
	},
	listItemDetails: {
		fontSize: 12
	}
})
