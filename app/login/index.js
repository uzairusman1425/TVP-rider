import { useState } from "react"
import {
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { MaterialCommunityIcons, Feather, Entypo } from "@expo/vector-icons"

export default function Page() {
	const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [rememberMe, setRememberMe] = useState(false)

	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/logo/tvp-logo-white.png")}
				style={styles.logo}
				resizeMode="contain"
			/>
			<View style={styles.formContainer}>
				<Text style={styles.titleText}>Login to your Account</Text>
				<View style={styles.inputContainer}>
					<View style={styles.inputFieldContainer}>
						<MaterialCommunityIcons
							name="email-outline"
							size={25}
							color="gray"
						/>
						<TextInput
							style={styles.textInput}
							placeholder="Email"
							inputMode="email"
							value={email}
							onChange={setEmail}
						/>
					</View>
					<View style={styles.inputFieldContainer}>
						<Feather name="lock" size={25} color="gray" />
						<TextInput
							style={styles.textInput}
							placeholder="Password"
							inputMode="text"
							secureTextEntry
							value={password}
							onChange={setPassword}
						/>
					</View>
				</View>
				<View style={styles.checkboxContainer}>
					<TouchableOpacity
						style={[
							styles.checkbox,
							rememberMe
								? styles.checkboxChecked
								: styles.checkboxUnChecked
						]}
						onPress={() => {
							setRememberMe(!rememberMe)
						}}
					>
						{rememberMe && (
							<Entypo name="check" size={15} color="black" />
						)}
					</TouchableOpacity>
					<Text style={styles.checkboxText}>Remember me</Text>
				</View>
				<TouchableOpacity style={styles.loginButton}>
					<Text style={styles.loginButtonText}>Login</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.forgetPasswordButton}>
				<Text style={styles.forgetPasswordText}>Forget Password?</Text>
			</TouchableOpacity>
			<View style={styles.continueTextContainer}>
				<View style={styles.horizontalLine} />
				<Text style={styles.continueText}>or continue with</Text>
				<View style={styles.horizontalLine} />
			</View>
			<View style={styles.socialSignInButtonsContainer}>
				<TouchableOpacity style={styles.socialSignInButton}>
					<Image
						source={require("../../assets/logo/facebook-logo.png")}
						style={styles.socialIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.socialSignInButton}>
					<Image
						source={require("../../assets/logo/google-logo.png")}
						style={styles.socialIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.socialSignInButton}>
					<Image
						source={require("../../assets/logo/apple-logo.png")}
						style={styles.socialIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.signUpButtonContainer}>
				<Text style={styles.signUpButtonText}>
					Don{"'"}t have an account?
				</Text>
				<TouchableOpacity
					onPress={() => {
						router?.navigate("/sign-up")
					}}
				>
					<Text style={styles.signUpButtonText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		marginVertical: 35
	},
	logo: {
		height: 100,
		width: 265,
		marginVertical: 15
	},
	formContainer: {
		width: "90%",
		flexDirection: "column",
		gap: 25
	},
	titleText: {
		fontSize: 35,
		color: "white",
		fontWeight: "700"
	},
	inputContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 10
	},
	inputFieldContainer: {
		height: 55,
		width: "100%",
		backgroundColor: "white",
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		paddingHorizontal: 15
	},
	textInput: {
		flex: 1,
		fontSize: 17.5
	},
	checkboxContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10
	},
	checkbox: {
		height: 22.5,
		width: 22.5,
		borderRadius: 7.5,
		alignItems: "center",
		justifyContent: "center"
	},
	checkboxChecked: {
		backgroundColor: "white"
	},
	checkboxUnChecked: {
		borderWidth: 2,
		borderColor: "white"
	},
	checkboxText: {
		color: "lightgrey",
		fontSize: 15,
		fontWeight: "bold"
	},
	loginButton: {
		height: 45,
		width: 165,
		borderRadius: 25,
		backgroundColor: "white",
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center"
	},
	loginButtonText: {
		fontSize: 20,
		fontWeight: "bold"
	},
	forgetPasswordButton: {
		marginVertical: 15
	},
	forgetPasswordText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "lightgrey"
	},
	continueTextContainer: {
		width: "90%",
		flexDirection: "row",
		gap: 10,
		alignItems: "center"
	},
	continueText: {
		color: "white",
		fontSize: 17.5,
		fontWeight: "500"
	},
	horizontalLine: {
		height: 1,
		flex: 1,
		backgroundColor: "white"
	},
	socialSignInButtonsContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginVertical: 15
	},
	socialSignInButton: {
		height: 60,
		width: 85,
		borderRadius: 15,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	socialIcon: {
		height: 30,
		width: 30
	},
	signUpButtonContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	signUpButtonText: {
		color: "white",
		fontSize: 16.5
	}
})
